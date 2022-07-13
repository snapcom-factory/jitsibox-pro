# Services

The backend is the core of the application. It acts as a bridge between the controllers and the main screen.

The code is written in [ExpressJS](https://expressjs.com/en/api.html), and is divided in four parts that will be described below :
- [Global status](#global-status)
- [Main file](#main-file-indexts)
- [Controllers](#controllers)
- [Services](#services)

## Installation and launch

To install all the required packages in the back, one just needs to run `npm install`. To run the application, one has to run `npm run start`. This will create a `dist` folder in the root of the project, where the application will be deployed. No hot update was implemented yet, so one has to restart the server in order to update the code.

## Global status

The global status is currently stored in a dictionnary, and aims at keeping track of the current status of the application. Its main purpose is to prevent bugs from potential socket deconnections. 

## Main file: `index.ts`

This file initiates the connection between the socket server and its clients. It starts the Express server, and launches the socket server. The controllers will then send requests to the socker server on the `"/controllers"` namespace, while the main screen will do it on the `"/mainScreens"` namespace.

Two middlewares were added (actually twice the same, but for both namespaces) in order to implement some authentication. Whenever a client connects to the socket server, it will provide two things :
- An authentication token, currently stored in `packages/model`, but which ought to be an environment variable.
- The name (or identifier) of the physical room the client is in (to make it easier to implement a central server, see Next steps for more details).
The middleware then simply checks whether the token is valid, and block the connection if it isn't.

Then, on the client's connection, the bridge sends the dictionnary `globalStatus` to the client, and adds the client to the socket room corresponding to the name of the physical room provided by the client.


