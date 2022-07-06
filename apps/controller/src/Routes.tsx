import { Routes as Switch, Route, useNavigate, NavigateFunction } from "react-router-dom"
import { GlobalStatus, socketEvents } from "@jitsi-box-pro/model"
import { useState } from "react"
import {
  HomeMenu,
  SharingPage,
  MeetingPage,
  NotFound,
  JoinPage,
  CreatePage,
} from "@/views"
import { useSocketListener } from "@/services/socket"

interface StatusProps {
  setIsLoading: (value: boolean) => void
  setIsAlreadyMuted: (value: boolean) => void
  setIsCameraAlreadyOn: (value: boolean) => void
  setIsHandAlreadyRaised: (value: boolean) => void
  setIsAlreadyAskingToShareScreen: (value: boolean) => void
  setIsAlreadySharingScreen: (value: boolean) => void
}

const adaptToCurrentStatus = (
  statusFromSocket : GlobalStatus,
  localStatus : StatusProps,
  navigate : NavigateFunction
) => {
  switch (statusFromSocket.global.page) {
    case "localSharing":
      navigate("/share");
      break;
    case "joiningCall":
      localStatus.setIsLoading(statusFromSocket.keyboardMenu.loading)
      navigate("/join");
      break;
    case "creatingCall":
      localStatus.setIsLoading(statusFromSocket.keyboardMenu.loading)
      navigate("/create");
      break;
    case "meeting":
      localStatus.setIsAlreadyMuted(statusFromSocket.meeting.isMuted)
      localStatus.setIsCameraAlreadyOn(statusFromSocket.meeting.isCameraOn)
      localStatus.setIsHandAlreadyRaised(statusFromSocket.meeting.isHandRaised)
      localStatus.setIsAlreadyAskingToShareScreen(statusFromSocket.meeting.isAskingToShareScreen)
      localStatus.setIsAlreadySharingScreen(statusFromSocket.meeting.isSharingScreen)
      navigate(`/meeting/${statusFromSocket.meeting.meetingId}`)
      break;
    default:
      navigate("/");
      // Reinitialization of local parameters
      localStatus.setIsLoading(statusFromSocket.keyboardMenu.loading)
      localStatus.setIsAlreadyMuted(statusFromSocket.meeting.isMuted)
      localStatus.setIsCameraAlreadyOn(statusFromSocket.meeting.isCameraOn)
      localStatus.setIsHandAlreadyRaised(statusFromSocket.meeting.isHandRaised)
      localStatus.setIsAlreadyAskingToShareScreen(statusFromSocket.meeting.isAskingToShareScreen)
      localStatus.setIsAlreadySharingScreen(statusFromSocket.meeting.isSharingScreen)
      break;
  }
}

const Routes = (): React.ReactElement => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAlreadyMuted, setIsAlreadyMuted] = useState<boolean>(false)
  const [isCameraAlreadyOn, setIsCameraAlreadyOn] = useState<boolean>(false)
  const [isHandAlreadyRaised, setIsHandAlreadyRaised] = useState<boolean>(false)
  const [isAlreadyAskingToShareScreen, setIsAlreadyAskingToShareScreen] = useState<boolean>(false)
  const [isAlreadySharingScreen, setIsAlreadySharingScreen] = useState<boolean>(false)

  const localStatus : StatusProps = {
    setIsLoading,
    setIsAlreadyMuted,
    setIsCameraAlreadyOn,
    setIsHandAlreadyRaised,
    setIsAlreadyAskingToShareScreen,
    setIsAlreadySharingScreen
  }

  useSocketListener(socketEvents.global.connectionData, (globalStatus : GlobalStatus) => {
    adaptToCurrentStatus(globalStatus, localStatus, navigate)
  })

  useSocketListener(socketEvents.global.cancel, () => navigate("/"))
  useSocketListener(socketEvents.menu.share, () => navigate("/share"))
  useSocketListener(socketEvents.menu.join, () => navigate("/join"))
  useSocketListener(socketEvents.menu.create, () => navigate("/create"))
  useSocketListener(socketEvents.joinCall.validate, (meetingId: string) =>
    navigate(`/meeting/${meetingId}`)
  )
  useSocketListener(socketEvents.createCall.validate, (meetingId: string) =>
    navigate(`/meeting/${meetingId}`)
  )
  return (
    <Switch>
      <Route path="/share" element={<SharingPage />} />
      <Route path="/meeting/:meetingId" element={
        <MeetingPage
          isAlreadyMuted={isAlreadyMuted}
          isCameraAlreadyOn={isCameraAlreadyOn}
          isHandAlreadyRaised={isHandAlreadyRaised}
          isAlreadyAskingToShareScreen={isAlreadyAskingToShareScreen}
          isAlreadySharingScreen={isAlreadySharingScreen}
        />
      } />
      <Route path="/join" element={<JoinPage isLoading={isLoading} />} />
      <Route path="/create" element={<CreatePage isLoading={isLoading} />} />
      <Route path="/" element={<HomeMenu />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}

export default Routes
