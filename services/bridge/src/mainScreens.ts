import { Server, Socket } from "socket.io"
import { globalStatus, localStatus } from "./status"
import {
  socketEvents,
  MainScreenToServerEvents,
  ServerToClientEvents,
} from "../../../packages/model/src/socketEvents"

const socketMainScreen = (
  io: Server,
  socket: Socket<MainScreenToServerEvents, ServerToClientEvents>
) => {
  const { roomName } = socket.handshake.auth

  const controllers = io.of("/controllers").to(roomName)

  // Joining a call
  socket.on(socketEvents.joinCall.validate, (meetingId: string) => {
    globalStatus.keyboardMenu.loading = false
    globalStatus.global.page = "meeting"
    globalStatus.meeting.meetingId = meetingId
    controllers.emit(socketEvents.joinCall.validate, meetingId)
  })

  socket.on(socketEvents.joinCall.error, (controllerId: string) => {
    globalStatus.keyboardMenu.loading = false
    io.of("/controllers").to(controllerId).emit(socketEvents.joinCall.error)
  })

  // Creating a call
  socket.on(socketEvents.createCall.validate, (meetingId: string) => {
    globalStatus.keyboardMenu.loading = false
    globalStatus.global.page = "meeting"
    globalStatus.meeting.meetingId = meetingId
    controllers.emit(socketEvents.createCall.validate, meetingId)
  })

  socket.on(socketEvents.createCall.error, (controllerId: string) => {
    globalStatus.keyboardMenu.loading = false
    io.of("/controllers").to(controllerId).emit(socketEvents.createCall.error)
  })

  // Local sharing
  socket.on(socketEvents.localSharing.start, () => {
    globalStatus.localSharing.isPlugged = true
    controllers.emit(socketEvents.localSharing.start)
  })

  socket.on(socketEvents.localSharing.stop, () => {
    globalStatus.localSharing.isPlugged = false
    controllers.emit(socketEvents.localSharing.stop)
  })

  // When in a meeting
  socket.on(socketEvents.meeting.mute, (isMuted: boolean) => {
    globalStatus.meeting.isMuted = isMuted
    controllers.emit(socketEvents.meeting.mute, isMuted)
  })

  socket.on(socketEvents.meeting.camera, (isCameraOn: boolean) => {
    globalStatus.meeting.isCameraOn = isCameraOn
    controllers.emit(socketEvents.meeting.camera, isCameraOn)
  })

  socket.on(socketEvents.meeting.wave, (isHandRaised: boolean) => {
    globalStatus.meeting.isHandRaised = isHandRaised
    controllers.emit(socketEvents.meeting.wave, isHandRaised)
  })

  socket.on(socketEvents.meeting.leave, () => {
    globalStatus.global.page = "menu"
    globalStatus.meeting = {
      meetingId: "",
      isMuted: false,
      isCameraOn: true,
      isHandRaised: false,
      isAskingToShareScreen: false,
      isSharingScreen: false,
    }
    controllers.emit(socketEvents.meeting.leave)
  })

  socket.on(socketEvents.meeting.sharingScreen, () => {
    if (globalStatus.meeting.isAskingToShareScreen) {
      globalStatus.meeting.isAskingToShareScreen = false
      globalStatus.meeting.isSharingScreen = true
      controllers.emit(socketEvents.meeting.sharingScreen)
    }
  })

  socket.on(socketEvents.meeting.stopSharing, () => {
    globalStatus.meeting.isAskingToShareScreen = false
    globalStatus.meeting.isSharingScreen = false
    controllers.emit(socketEvents.meeting.stopSharing)
  })

  socket.on("disconnect", () => {
    localStatus.mainScreenId = ""
  })
}

export default socketMainScreen
