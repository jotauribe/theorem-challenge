# Developement guide

To start a development server, use `npm install && npm start`.

The project uses Prettier formatter. Use [Prettier in your editor](https://prettier.io/docs/en/editors.html) or run `npm run format` manually. Same for linter: use [ESLint in your editor](https://eslint.org/docs/user-guide/integrations) or run `npm run lint` manually.

## Tooling

The project is a React application. Tooling supports both TypeScript and JavaScript components, as well as both CSS-in-JS and CSS modules for styling. See examples of both in Home and NotFound components.

## Architecture

The initial served HTML comes from index.html. The only imperative connected script file is src/index.tsx, which starts the React application. The App component in src/App contains top-level setup and routing. App calls different screens from src/views. The rest of src/\* are further supporting modules: data, visual components, helper functions.

The build is done with a custom Webpack configuration. It has no unused boilerplate, so everything you see there is used somewhere in the app. In production mode Webpack builds into dist/ which is then deployed as a folder with static html, js, and css files.

See further README.md files deeper in the tree for more detailed explanations.
