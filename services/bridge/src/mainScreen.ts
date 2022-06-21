import { Server, Socket } from "socket.io";
import { globalStatus, localStatus } from "./status";

const socketMainScreen = (io: Server, socket : Socket) => {
  const roomName = socket.handshake.auth.roomName;
  const mainScreenId = localStatus.mainScreenId;

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

export default socketMainScreen;