# GitHubCompare with React

<img src="https://img-a.udemycdn.com/course/750x422/1362070_b9a1_2.jpg" height="200" width="250">

This project was bootstrapped with **create-react-app.**

## Available Scripts

To get the  packages and their dependencies required for the project run **npm install**

<h3>npm start</h3>

Runs the app in development mode on a local server.
It can access from http://localhost:3000

<h3>npm run test</h3>
Launches the test in the interactive watch mode.
See the section about running tests for more information.

<h3>npm run build</h3>

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

<h3>npm run eject</h3>

Make sure that this is a one-way operation.Can't revert back once ejected
If not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Project Config

At the start **index.js** calls the function **App.js** through it **profile.js** is processed in which data from github api is fetched based on the username entered in the input,
when the button is clicked.
Now as a centralized store called **redux** on the basis of the action type and payload data will be stored in the store using root-reducer.Here in the store localstorage is used
to make data persistent.As a result or ouput github profiles with the info is presented in the form of card and is sorted based on followers.

