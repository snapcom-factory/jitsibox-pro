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

import express from "express";
import http from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(__dirname + "/front_mock"))

// Authentication middleware
io.use((socket : any, next : Function) => {
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

io.on("connection", (socket : any) => {
  socket.emit("connection-data", globalStatus)

  const mainScreenId = localStatus.mainScreenId
  const roomName = socket.handshake.auth.roomName;

  // Events are handled differently for the main screen and the controllers
  socket.join(`${roomName}`);
  if (socket.handshake.auth.controllerName === "controller") {
    socket.join(`${roomName} controllers`);

    // Going back to the menu
    socket.on("global.cancel", () => {
      globalStatus.global.page = "menu";
      globalStatus.keyboardMenu.loading = false;
      globalStatus.localSharing.isPlugged = false;
      io.to(`${roomName}`).emit("global.cancel");
    });

    // When in the menu
    socket.on("menu.join", () => {
      globalStatus.global.page = "joiningCall";
      // Warning everyone that the user is trying to join a call
      io.to(`${roomName}`).emit("menu.join");
    });

    socket.on("menu.create", () => {
      globalStatus.global.page = "creatingCall";
      // Warning everyone that the user is trying to create a call
      io.to(`${roomName}`).emit("menu.create");
    });

    socket.on("menu.share", () => {
      globalStatus.global.page = "localSharing";
      // Warning everyone that the user is trying to share his screen
      io.to(`${roomName}`).emit("menu.share");
    });

    socket.on("joinCall.validate", (meetingId : string) => {
      globalStatus.keyboardMenu.loading = true;
      // The socket id is sent to the main screen in order to answer only to
      // the sender if there is any error
      socket.to(mainScreenId).emit("joinCall.validate", meetingId, socket.id);
    });

    // When creating a call
    socket.on("createCall.validate", (meetingId : string) => {
      globalStatus.keyboardMenu.loading = true;
      socket.to(mainScreenId).emit("createCall.validate", meetingId, socket.id);
    });

    // The controller doesn't say whether the local sharing starts or not, only the
    // main screen does when it detects an HDMI input.

    // When in a meeting
    // Everything that happens in a meeting has to be sent to the Jitsi server
    socket.on("meeting.mute", (isMuted : boolean) => {
      socket.to(mainScreenId).emit("meeting.mute", isMuted);
    });

    socket.on("meeting.camera", (isCameraOn : boolean) => {
      socket.to(mainScreenId).emit("meeting.camera", isCameraOn);
    });

    socket.on("meeting.wave", (isHandRaised : boolean) => {
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
    socket.on("joinCall.validate", (meetingId : string) => {
      globalStatus.keyboardMenu.loading = false;
      globalStatus.global.page = "meeting";
      globalStatus.meeting.meetingId = meetingId;
      socket.to(`${roomName} controllers`).emit("joinCall.validate", meetingId);
    });

    socket.on("joinCall.error", (controllerId : string) => {
      globalStatus.keyboardMenu.loading = false;
      socket.to(controllerId).emit("joinCall.error");
    })

    // Creating a call
    socket.on("createCall.validate", (meetingId : string) => {
      globalStatus.keyboardMenu.loading = false;
      globalStatus.global.page = "meeting";
      globalStatus.meeting.meetingId = meetingId;
      socket.to(`${roomName} controllers`).emit("createCall.validate", meetingId);
    });

    socket.on("createCall.error", (controllerId : string) => {
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
    socket.on("meeting.mute", (isMuted : boolean) => {
      globalStatus.meeting.isMuted = isMuted;
      socket.to(`${roomName} controllers`).emit("meeting.mute", isMuted);
    });

    socket.on("meeting.camera", (isCameraOn : boolean) => {
      globalStatus.meeting.isCameraOn = isCameraOn;
      socket.to(`${roomName} controllers`).emit("meeting.camera", isCameraOn);
    });

    socket.on("meeting.wave", (isHandRaised : boolean) => {
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

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
