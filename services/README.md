# Services

The backend is the core of the application. It acts as a bridge between the controllers and the main screen.

The code is written in [ExpressJS](https://expressjs.com/en/api.html), and is divided in four parts that will be described below :
- [Global status](#global-status)
- [Main file](#main-file-indexts)
- [Controllers](#controllers)
- [Main screen](#main-screen)

## Installation and launch

To install all the required packages in the back, one just needs to run `npm install`. To run the application, one has to run `npm run start`. This will create a `dist` folder in the root of the project, where the application will be deployed. No hot update was implemented yet, so one has to restart the server in order to update the code.

## Global status

The global status is currently stored in a dictionnary, and aims at keeping track of the current status of the application. Its main purpose is to prevent bugs from potential socket deconnections. As a matter of fact, on any client's connection, the server sends this dictionnary in order for the client to adapt to the current application's status.

## Main file: `index.ts`

This file initiates the connection between the socket server and its clients. It starts the Express server, and launches the socket server. The controllers will then send requests to the socker server on the `"/controllers"` namespace, while the main screen will do it on the `"/mainScreens"` namespace.

Two middlewares were added (actually twice the same, but for both namespaces) in order to implement some authentication. Whenever a client connects to the socket server, it will provide two things :
- An authentication token, currently stored in `packages/model`, but which ought to be an environment variable.
- The name (or identifier) of the physical room the client is in (to make it easier to implement a central server, see Next steps for more details).
The middleware then simply checks whether the token is valid, and block the connection if it isn't.

Then, on the client's connection, the bridge sends the dictionnary `globalStatus` to the client, and adds the client to the socket room corresponding to the name of the physical room provided by the client.

## Controllers

This files describes the behavior of the backend for every event emitted by the controllers. The behavior is quite simple and always the same :
- Update some data in `globalStatus` if needed
- Notify the main screen that something changed
- Notify the controllers that something changed if the acknowledgement of the main screen is not needed

The precise behavior of the controllers is described on [this link](https://miro.com/app/board/uXjVOsD0w74=/?share_link_id=145031442760).

## Main screen

This files describes the behavior of the backend for every event emitted by the main screen. The behavior is quite simple and always the same :
- Update some data in `globalStatus` if needed
- Notify the controllers that something changed

We don't notify the main screen again, because only one main screen is supposed to be connected at a time (and it already has the information).

The precise behavior of the controllers is described on [this link](https://miro.com/app/board/uXjVOsD0w74=/?share_link_id=145031442760).


