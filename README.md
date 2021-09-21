# Truecaller Blog Site

## Setup
- Extract the zip file
- Copy the file .env-SAMPLE to .env
- run "yarn" or "npm install"
- run "yarn start" or "npm run start"

## Solutions used:
- This application was developed using Node v14.17.6, yarn 1.22.5 | npm 6.14.15
- React.JS - bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Moment.JS - to easily format and display time/date relatd data
- Styled-Components - For component-level control of UI styling
- React-Router - for managing routing and virtual pages (list page / individual post page)
- React Testing-Library - for Component unit testing
- Font Awesome - for certain use of icons such as the spinner and arrows.
- Lodash - particularly the "debounce" function to regulate the handling of clicks on the filter.

## State management
The application uses the Context-API and built-in React hooks such as *useContext*, *useReducer* to manage the application state

## Unit test
run "yarn test" or "npm run test"
