const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const mode = process.env.NODE_ENV;
if (mode !== "development" && mode !== "production")
  throw new Error("Add NODE_ENV=development or =production to run Webpack");
const isDevelopment = mode === "development";
const isProduction = mode === "production";

module.exports = {
  devtool: isDevelopment ? "inline-source-map" : false,
  devServer: {
    clientLogLevel: "warn",
    contentBase: "./dist",
    historyApiFallback: true,
    host: process.env.EXPOSE_ON_LAN === "true" ? "0.0.0.0" : undefined,
    hot: true,
  },
  entry: "./src/index.tsx",
  mode,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              [
                "babel-plugin-styled-components",
                {
                  displayName: isDevelopment,
                  pure: true,
                },
              ],
              isDevelopment ? "react-refresh/babel" : undefined,
            ].filter((x) => x),
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-react",
                {
                  development: isDevelopment,
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                compileType: "module",
                localIdentName: isDevelopment
                  ? "[name]_[local]_[hash:base64:5]"
                  : "[local]_[hash:base64]",
                mode: (path) => {
                  const inCurrentDir = path.startsWith(__dirname);
                  if (!inCurrentDir) return "global";
                  const relative = path.substr(__dirname.length + 1);
                  if (relative.includes("node_modules")) return "global";
                  return "local";
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg)$/,
        type: "asset",
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" },
        { from: "src/netlify/_redirects", to: "_redirects", toType: "file" },
      ],
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
