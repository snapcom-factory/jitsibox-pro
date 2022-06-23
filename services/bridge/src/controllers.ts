import { Server, Socket } from "socket.io";
import { globalStatus, localStatus } from "./status";
import { socketEvents } from "../../../packages/model/src/socketEvents";

const socketControllers = (io: Server, socket : Socket) => {
  const roomName = socket.handshake.auth.roomName;
  const mainScreenId = localStatus.mainScreenId;

  socket.join(`${roomName} controllers`);

  // Going back to the menu
  socket.on(socketEvents.global.cancel, () => {
    globalStatus.global.page = "menu";
    globalStatus.keyboardMenu.loading = false;
    globalStatus.localSharing.isPlugged = false;
    io.to(`${roomName}`).emit(socketEvents.global.cancel);
  });

  // When in the menu
  socket.on(socketEvents.menu.join, () => {
    globalStatus.global.page = "joiningCall";
    // Warning everyone that the user is trying to join a call
    io.to(`${roomName}`).emit(socketEvents.menu.join);
  });

  socket.on(socketEvents.menu.create, () => {
    globalStatus.global.page = "creatingCall";
    // Warning everyone that the user is trying to create a call
    io.to(`${roomName}`).emit(socketEvents.menu.create);
  });

  socket.on(socketEvents.menu.share, () => {
    globalStatus.global.page = "localSharing";
    // Warning everyone that the user is trying to share his screen
    io.to(`${roomName}`).emit(socketEvents.menu.share);
  });

  socket.on(socketEvents.joinCall.validate, (meetingId : string) => {
    globalStatus.keyboardMenu.loading = true;
    // The socket id is sent to the main screen in order to answer only to
    // the sender if there is any error
    socket.to(mainScreenId).emit(socketEvents.joinCall.validate, meetingId, socket.id);
  });

  // When creating a call
  socket.on(socketEvents.createCall.validate, (meetingId : string) => {
    globalStatus.keyboardMenu.loading = true;
    socket.to(mainScreenId).emit(socketEvents.createCall.validate, meetingId, socket.id);
  });

  // The controller doesn't say whether the local sharing starts or not, only the
  // main screen does when it detects an HDMI input.

  // When in a meeting
  // Everything that happens in a meeting has to be sent to the Jitsi server
  socket.on(socketEvents.meeting.mute, (isMuted : boolean) => {
    socket.to(mainScreenId).emit(socketEvents.meeting.mute, isMuted);
  });

  socket.on(socketEvents.meeting.camera, (isCameraOn : boolean) => {
    socket.to(mainScreenId).emit(socketEvents.meeting.camera, isCameraOn);
  });

  socket.on(socketEvents.meeting.wave, (isHandRaised : boolean) => {
    socket.to(mainScreenId).emit(socketEvents.meeting.wave, isHandRaised);
  });

  socket.on(socketEvents.meeting.leave, () => {
    socket.to(mainScreenId).emit(socketEvents.meeting.leave);
  });

  socket.on(socketEvents.meeting.askingToShareScreen, () => {
    globalStatus.meeting.isAskingToShareScreen = true;
    socket.to(mainScreenId).emit(socketEvents.meeting.askingToShareScreen);
  });

  socket.on(socketEvents.meeting.stopSharing, () => {
    socket.to(mainScreenId).emit(socketEvents.meeting.stopSharing);
  })

  // Same as for local sharing, only the main screen tells when one is sharing
}

export default socketControllers;