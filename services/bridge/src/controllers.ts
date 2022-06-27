import { Server, Socket } from "socket.io"
import { globalStatus } from "./status"
import { socketEvents } from "../../../packages/model/src/socketEvents"

const socketControllers = (io: Server, socket: Socket) => {
  const { roomName } = socket.handshake.auth

  const controllers = io.of("/controllers").to(roomName)
  const mainScreen = io.of("/mainScreen").to(roomName)

  // Going back to the menu
  socket.on(socketEvents.global.cancel, () => {
    globalStatus.global.page = "menu"
    globalStatus.keyboardMenu.loading = false
    globalStatus.localSharing.isPlugged = false
    controllers.emit(socketEvents.global.cancel)
    mainScreen.emit(socketEvents.global.cancel)
  })

  // When in the menu
  socket.on(socketEvents.menu.join, () => {
    globalStatus.global.page = "joiningCall"
    // Warning everyone that the user is trying to join a call
    controllers.emit(socketEvents.menu.join)
    mainScreen.emit(socketEvents.menu.join)
  })

  socket.on(socketEvents.menu.create, () => {
    globalStatus.global.page = "creatingCall"
    // Warning everyone that the user is trying to create a call
    controllers.emit(socketEvents.menu.create)
    mainScreen.emit(socketEvents.menu.create)
  })

  socket.on(socketEvents.menu.share, () => {
    globalStatus.global.page = "localSharing"
    // Warning everyone that the user is trying to share his screen
    controllers.emit(socketEvents.menu.share)
    mainScreen.emit(socketEvents.menu.share)
  })

  socket.on(socketEvents.joinCall.validate, (meetingId: string) => {
    globalStatus.keyboardMenu.loading = true
    // The socket id is sent to the main screen in order to answer only to
    // the sender if there is any error
    mainScreen.emit(socketEvents.joinCall.validate, meetingId, socket.id)
  })

  // When creating a call
  socket.on(socketEvents.createCall.validate, (meetingId: string) => {
    globalStatus.keyboardMenu.loading = true
    mainScreen.emit(socketEvents.createCall.validate, meetingId, socket.id)
  })

  // The controller doesn't say whether the local sharing starts or not, only the
  // main screen does when it detects an HDMI input.

  // When in a meeting
  // Everything that happens in a meeting has to be sent to the Jitsi server
  socket.on(socketEvents.meeting.mute, (isMuted: boolean) => {
    mainScreen.emit(socketEvents.meeting.mute, isMuted)
  })

  socket.on(socketEvents.meeting.camera, (isCameraOn: boolean) => {
    mainScreen.emit(socketEvents.meeting.camera, isCameraOn)
  })

  socket.on(socketEvents.meeting.wave, (isHandRaised: boolean) => {
    mainScreen.emit(socketEvents.meeting.wave, isHandRaised)
  })

  socket.on(socketEvents.meeting.leave, () => {
    mainScreen.emit(socketEvents.meeting.leave)
  })

  socket.on(socketEvents.meeting.askingToShareScreen, () => {
    globalStatus.meeting.isAskingToShareScreen = true
    mainScreen.emit(socketEvents.meeting.askingToShareScreen)
  })

  socket.on(socketEvents.meeting.stopSharing, () => {
    mainScreen.emit(socketEvents.meeting.stopSharing)
  })

  // Same as for local sharing, only the main screen tells when one is sharing
}

export default socketControllers
