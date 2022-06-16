const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + "/front_mock"));

// Authentication middleware
io.use((socket, next) => {
  const providedToken = socket.handshake.auth.token;
  if (providedToken !== "let me in") {
    next(new Error('Authentication error'));
  } else {
    if (socket.handshake.auth.controllerName === "controller") {
      if (localStatus.mainScreenId !== "") {
        next(new Error('Main screen already connected'));
      } else {
        localStatus.mainScreenId = socket.id;
        next();
      }
    } else { next();}
  }
});

io.on('connection', (socket) => {
  console.log("new user connected");

  socket.on('mute', (muteValue) => {
    io.emit('change-mute', muteValue.includes('non') ? "oui" : "non");
  });

  socket.on('camera', (cameraValue) => {
    io.emit('change-camera', cameraValue.includes('non') ? "oui" : "non");
  });

  socket.on('raise-hand', (raiseHandValue) => {
    io.emit('change-raise-hand', raiseHandValue.includes('non') ? "oui" : "non");
  });

  socket.on('share-screen', (shareScreenValue) => {
    io.emit('change-share-screen', shareScreenValue.includes('non') ? "oui" : "non");
  });

  socket.on('leave-call', (leaveCallValue) => {
    io.emit('change-leave-call', leaveCallValue.includes('non') ? "oui" : "non");
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});