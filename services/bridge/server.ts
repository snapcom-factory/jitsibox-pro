const globalStatus = {
  global: {
    page: "menu",
  },
  localSharing: {
    isPlugged: false,
  },
  keyboardMenu: {
    loading: false,
  },
  meeting: {
    meetingId: "",
    isMuted: false,
    isCameraOn: true,
    isHandRaised: false,
    isAskingToShareScreen: false,
    isSharingScreen: false,
  }
}

const localStatus = {
  mainScreenId: "",
  isControllerConnected: false,
  isMainScreenConnected: false,
}

const express = require("express")
const port = process.env.PORT || 3000

const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)

app.use(express.static(__dirname + "/front_mock"))

// Authentication middleware
io.use((socket, next) => {
  const providedToken = socket.handshake.auth.token
  if (providedToken !== "let me in") {
    next(new Error("Authentication error"))
  } else {
    if (socket.handshake.auth.controllerName === "controller") {
      if (localStatus.mainScreenId !== "") {
        next(new Error("Main screen already connected"))
      } else {
        localStatus.mainScreenId = socket.id
        next()
      }
    } else {
      next()
    }
  }
})

io.on("connection", (socket) => {
  socket.emit("connection-data", globalStatus)

  const mainScreenId = localStatus.mainScreenId
  const roomName = socket.handshake.auth.roomName;

  // Events are handled differently for the main screen and the controllers
  if (socket.handshake.auth.controllerName === "controller") {
    socket.join(`${roomName} controllers`);

    // Going back to the menu
    socket.on("global.cancel", () => {
      globalStatus.global.page = "menu";
      globalStatus.keyboardMenu.loading = false;
      globalStatus.localSharing.isPlugged = false;
      socket.to(mainScreenId).emit("global.cancel");
      io.to(`${roomName} controllers`).emit("global.cancel");
    });

    // When in the menu
    socket.on("menu.join", () => {
      globalStatus.global.page = "joiningCall";
      // Warning the main screen that the user is trying to join a call
      socket.to(mainScreenId).emit("menu.join");
      // Warning all the controllers (including the sender, to confirm reception)
      io.to(`${roomName} controllers`).emit("menu.join");
    });

    socket.on("menu.create", () => {
      globalStatus.global.page = "creatingCall";
      socket.to(mainScreenId).emit("menu.create");
      io.to(`${roomName} controllers`).emit("menu.create");
    });

    socket.on("menu.share", () => {
      globalStatus.global.page = "localSharing";
      socket.to(mainScreenId).emit("menu.share");
      io.to(`${roomName} controllers`).emit("menu.share");
    });

    socket.on("joinCall.validate", (meetingId) => {
      globalStatus.keyboardMenu.loading = true;
      // The socket id is sent to the main screen in order to answer only to
      // the sender if there is any error
      socket.to(mainScreenId).emit("joinCall.validate", meetingId, socket.id);
    });

    // When creating a call
    socket.on("createCall.validate", (meetingId) => {
      globalStatus.keyboardMenu.loading = true;
      socket.to(mainScreenId).emit("createCall.validate", meetingId, socket.id);
    });

    // The controller doesn't say whether the local sharing starts or not, only the
    // main screen does when it detects an HDMI input.

    // When in a meeting
    // Everything that happens in a meeting has to be sent to the Jitsi server
    socket.on("meeting.mute", (isMuted) => {
      socket.to(mainScreenId).emit("meeting.mute", isMuted);
    });

    socket.on("meeting.camera", (isCameraOn) => {
      socket.to(mainScreenId).emit("meeting.camera", isCameraOn);
    });

    socket.on("meeting.wave", (isHandRaised) => {
      socket.to(mainScreenId).emit("meeting.wave", isHandRaised);
    });

    socket.on("meeting.leave", () => {
      socket.to(mainScreenId).emit("meeting.leave");
    });

    socket.on("meeting.askingToShareScreen", () => {
      globalStatus.meeting.isAskingToShareScreen = true;
      socket.to(mainScreenId).emit("meeting.askingToShareScreen");
    });

    socket.on("meeting.stopSharing", () => {
      socket.to(mainScreenId).emit("meeting.stopSharing");
    })

    // Same as for local sharing, only the main screen tells when one is sharing
  } else if ( socket.handshake.auth.controllerName === "mainScreen" ) {

    // Joining a call
    socket.on("joinCall.validate", (meetingId) => {
      globalStatus.keyboardMenu.loading = false;
      globalStatus.global.page = "meeting";
      globalStatus.meeting.meetingId = meetingId;
      socket.to(`${roomName} controllers`).emit("joinCall.validate", meetingId);
    });

    socket.on("joinCall.error", (controllerId) => {
      globalStatus.keyboardMenu.loading = false;
      socket.to(controllerId).emit("joinCall.error");
    })

    // Creating a call
    socket.on("createCall.validate", (meetingId) => {
      globalStatus.keyboardMenu.loading = false;
      globalStatus.global.page = "meeting";
      globalStatus.meeting.meetingId = meetingId;
      socket.to(`${roomName} controllers`).emit("createCall.validate", meetingId);
    });

    socket.on("createCall.error", (controllerId) => {
      globalStatus.keyboardMenu.loading = false;
      socket.to(controllerId).emit("createCall.error");
    });

    // Local sharing
    socket.on("localSharing.start", () => {
      globalStatus.localSharing.isPlugged = true;
      socket.to(`${roomName} controllers`).emit("localSharing.start");
    });

    socket.on("localSharing.stop", () => {
      globalStatus.localSharing.isPlugged = false;
      socket.to(`${roomName} controllers`).emit("localSharing.stop");
    });

    // When in a meeting
    socket.on("meeting.mute", (isMuted) => {
      globalStatus.meeting.isMuted = isMuted;
      socket.to(`${roomName} controllers`).emit("meeting.mute", isMuted);
    });

    socket.on("meeting.camera", (isCameraOn) => {
      globalStatus.meeting.isCameraOn = isCameraOn;
      socket.to(`${roomName} controllers`).emit("meeting.camera", isCameraOn);
    });

    socket.on("meeting.wave", (isHandRaised) => {
      globalStatus.meeting.isHandRaised = isHandRaised;
      socket.to(`${roomName} controllers`).emit("meeting.wave", isHandRaised);
    });

    socket.on("meeting.leave", () => {
      globalStatus.global.page = "menu";
      globalStatus.meeting = {
        meetingId: "",
        isMuted: false,
        isCameraOn: true,
        isHandRaised: false,
        isAskingToShareScreen: false,
        isSharingScreen: false
      }
      socket.to(`${roomName} controllers`).emit("meeting.leave");
    });

    socket.on("meeting.sharingScreen", () => {
      globalStatus.meeting.isAskingToShareScreen = false;
      globalStatus.meeting.isSharingScreen = true;
      socket.to(`${roomName} controllers`).emit("meeting.sharingScreen");
    });

    socket.on("meeting.stopSharing", () => {
      globalStatus.meeting.isSharingScreen = false;
      socket.to(`${roomName} controllers`).emit("meeting.stopSharing");
    });

    socket.on("disconnect", () => {
      localStatus.mainScreenId = "";
    });
  }
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
