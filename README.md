# SnipeFE

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of CRA guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

### `npm run lint:js`

Linting js, ts, tsx files in src folder witn eslint and prettier.

### `npm run lint:styles`

Linting css files in src folder witn stylelint.

### `npm run lint-all:fix`

Linting js, ts, tsx and css files and fix errors if it possible.

## Pre-commit hook

Linting is run before every commit. Any errors that can be fixed automatically will be fixed and added to the current commit. However, if there are any linting errors that cannot be fixed automatically, the commit will fail and the errors will need to be manually fixed before trying to commit the code again.