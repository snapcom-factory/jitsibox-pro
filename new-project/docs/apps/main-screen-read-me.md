---
sidebar_position: 3
---

# Using the local sharing feature

The `navigator.mediaDevices` object need to be accessible for the local sharing to work.

The `navigator.mediaDevices` object is only accessible from secure origins (`https` or `localhost`). If you want to try the app on an insecure origin, you should try to change the browser configurations. For example, on Chrome, try to change the #unsafely-treat-insecure-origin-as-secure flag at chrome://flags.

For the app to work correctly, access to the camera and the microphones should be given by the browser by default.
