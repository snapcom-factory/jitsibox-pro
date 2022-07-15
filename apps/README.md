# Frontend Apps

## Introduction

These apps are what the users see on the controller and the main screens. They communicate between each other thanks to the bridge.

These apps used the same technologies :

- [React](https://beta.reactjs.org) a Javascript frontend library
- [Typescript](https://www.typescriptlang.org) a strongly typed programming language that is a superset of JavaScript
- [MUI](https://mui.com/material-ui/getting-started/overview/) a React Component library allowing for fast prototyping
- [Vite](https://vitejs.dev) a frontend tooling library that configures our development environment
- [Socket.io](https://socket.io) to communicate with the bridge using WebSockets

## Installation and getting started

Before installation, you should add the following to `.env` files:

- in the `controller` app, add the following `.env` file at the same level of the `index.html` and `package.json` files :

```
VITE_DOMAIN = webconf.numerique.gouv.fr
```

- in the `main-screen` app, add the following `.env` file at the same level of the `index.html` and `package.json` files :

```
VITE_WEBCONF_TOKEN = #add the Webconf JWT
VITE_DOMAIN = webconf.numerique.gouv.fr
```

By running `npm i` in each app folder you should be able to install all of the dependencies necessary for the project to run. Next, you can use the various `npm` scripts to launch the app (`npm run dev` for development for example).

## Folder structure

All of the apps have the same basic folder structure :

- `index.html is the entry point to the website for the browser
- `src/`
  - `index.tsx` or `main.tsx` are loaded inside of the `index.html` and renders the `App.tsx` component
  - `App.tsx` is the entry point to the React application
  - `Routes.tsx` is the main component rendered inside of `App.tsx` and renders a different page in function of the URL path.
  - `views/` contains the different pages rendered by `Routes.tsx`
  - `components/` contains the reusable components that are throughout the app
  - `assets/` contains images or fonts used in the app
  - `services/` contains various bits of logic that the app uses

## Noteworthy features

### Common

- `services/theme.ts` defines the app theme (color, typography, ...). It is used by all MUI components and is also compatible with external JS libraries thanks to the `useTheme` hook: you can learn more with the [MUI documentation](https://mui.com/material-ui/customization/theming/)
- We use a plugin to Vite that allows to use the SVGR library: it transforms `.svg` files into React components allowing easy use of SVGs in React.

### Controller

- `services/snackbar/` defines an alert component that can easily be called anywhere in the app. You can read about the philosophy behind our snackbar [here](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)
- `components/CustomKeyboard/` defines the custom keyboard used in the Create and Join Meeting pages. It uses an external library that should be replaced: you can read more about it in the `CustomKeyboard.tsx` file.

### Main Screen

- `services/mediaDevices` defines functions that allow us to easily use MediaDevices throughout the app. The way they are chosen is done through the `services/config.ts` file.
- The SharePage tries to get a Share device that it displays on screen: for now the share device is the video stream coming from what is plugged into the HDMI in port of the Poly GC8.
- The MeetingPage uses the Jitsi React SDK, which is under the hood the Jitsi IFrame API. Thus, we are for now limited by what the IFrame API proposes. It is limiting the share functionality inside of a meeting: currently there is no way to select a share device when toggling screen share on

## TODOs

- As mentioned above, the CustomKeyboard should be replaced: defining our own keyboard, thanks to MUI components and grid/flex elements, should get us a responsive keyboard, that interoperates well with how we theme the app
- Add the share screen feature inside a Jitsi Meeting: to do so, we believe that you should either use the low level library or try to ask the Jitsi Meet team to add the missing function `setScreenShareDevice` to the IFrame API (or do yourself a Pull Request)
- For performance gains, you could check if our use of the `useEffect` hooks were all necessary according to this piece of [React documentation](https://beta.reactjs.org/learn/you-might-not-need-an-effect)
