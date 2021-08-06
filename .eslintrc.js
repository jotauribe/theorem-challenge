module.exports = {
  extends: ["plugin:@theorem/minimal"],
  ignorePatterns: ["dist"],
  plugins: ["@theorem"],
  env: {
    browser: true,
  },
};
