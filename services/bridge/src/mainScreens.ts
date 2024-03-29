import { Server, Socket } from "socket.io"
import globalStatus from "./status"
import {
  NewMeetingProps,
  socketEvents,
  MainScreenToServerEvents,
  ServerToClientEvents,
} from "./model"

const socketMainScreen = (
  io: Server,
  socket: Socket<MainScreenToServerEvents, ServerToClientEvents>
) => {
  const { roomName } = socket.handshake.auth

  const controllers = io.of("/controllers").to(roomName)

  // Joining a call
  socket.on(socketEvents.joinCall.validate, (props: NewMeetingProps) => {
    if (globalStatus.keyboardMenu.loading) {
      globalStatus.keyboardMenu.loading = false
      globalStatus.global.page = "meeting"
      globalStatus.meeting.meetingId = props.meetingId
      globalStatus.meeting.participants = props.numberOfParticipants
      controllers.emit(socketEvents.joinCall.validate, props)
    }
  })

  socket.on(socketEvents.joinCall.error, (controllerId: string) => {
    globalStatus.keyboardMenu.loading = false
    io.of("/controllers").to(controllerId).emit(socketEvents.joinCall.error)
  })

  // Creating a call
  socket.on(socketEvents.createCall.validate, (props: NewMeetingProps) => {
    if (globalStatus.keyboardMenu.loading) {
      globalStatus.keyboardMenu.loading = false
      globalStatus.global.page = "meeting"
      globalStatus.meeting.meetingId = props.meetingId
      globalStatus.meeting.participants = props.numberOfParticipants
      controllers.emit(socketEvents.createCall.validate, props)
    }
  })

  socket.on(socketEvents.createCall.error, (controllerId: string) => {
    globalStatus.keyboardMenu.loading = false
    io.of("/controllers").to(controllerId).emit(socketEvents.createCall.error)
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

  socket.on(socketEvents.meeting.chat, (isChat: boolean) => {
    globalStatus.meeting.isChat = isChat
    controllers.emit(socketEvents.meeting.chat, isChat)
  })

  socket.on(socketEvents.meeting.leave, () => {
    globalStatus.global.page = "menu"
    globalStatus.meeting = {
      meetingId: "",
      participants: 0,
      isMuted: false,
      isCameraOn: true,
      isHandRaised: false,
      isChat: false,
      isAskingToShareScreen: false
    }
    controllers.emit(socketEvents.meeting.leave)
    controllers.emit(socketEvents.global.connectionData, globalStatus)
  })

  socket.on(socketEvents.meeting.askingToShareScreen, () => {
    globalStatus.meeting.isAskingToShareScreen = true
    controllers.emit(socketEvents.meeting.askingToShareScreen)
  })

  socket.on(socketEvents.meeting.stopSharing, () => {
    globalStatus.meeting.isAskingToShareScreen = false
    controllers.emit(socketEvents.meeting.stopSharing)
  })

  socket.on(
    socketEvents.meeting.participants,
    (numberOfParticipants: number) => {
      globalStatus.meeting.participants = numberOfParticipants
      controllers.emit(socketEvents.meeting.participants, numberOfParticipants)
    }
  )
}

export default socketMainScreen
