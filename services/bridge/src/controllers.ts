import { Server, Socket } from "socket.io";
import { globalStatus, localStatus } from "./status";

const socketControllers = (io: Server, socket : Socket) => {
  const roomName = socket.handshake.auth.roomName;
  const mainScreenId = localStatus.mainScreenId;

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
}

export default socketControllers;