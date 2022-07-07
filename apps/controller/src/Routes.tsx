import { Routes as Switch, Route } from "react-router-dom"
import { GlobalStatus, socketEvents } from "@jitsi-box-pro/model"
import useCustomNavigate, { CustomNavigateFunction } from "@/services/useCustomNavigate"
import {
  HomeMenu,
  SharingPage,
  MeetingPage,
  NotFound,
  JoinPage,
  CreatePage,
} from "@/views"
import { useSocketListener } from "@/services/socket"

interface NewMeetingProps {
  meetingId: string
  defaultParams: {
    audioMuted: boolean
    videoMuted: boolean
  }
}

const adaptToCurrentStatus = (
  statusFromSocket : GlobalStatus,
  navigate : CustomNavigateFunction
) => {
  switch (statusFromSocket.global.page) {
    case "localSharing":
      navigate("/share");
      break;
    case "joiningCall":
      navigate("/join", { isLoading: statusFromSocket.keyboardMenu.loading });
      break;
    case "creatingCall":
      navigate("/create", { isLoading: statusFromSocket.keyboardMenu.loading });
      break;
    case "meeting":
      navigate(`/meeting/${statusFromSocket.meeting.meetingId}`, {
        isAlreadyMuted: statusFromSocket.meeting.isMuted,
        isCameraAlreadyOn: statusFromSocket.meeting.isCameraOn,
        isHandAlreadyRaised: statusFromSocket.meeting.isHandRaised,
        isAlreadyAskingToShareScreen: statusFromSocket.meeting.isAskingToShareScreen,
        isAlreadySharingScreen: statusFromSocket.meeting.isSharingScreen
      })
      break;
    default:
      navigate("/");
      break;
  }
}

const Routes = (): React.ReactElement => {
  const navigate = useCustomNavigate()

  useSocketListener(socketEvents.global.connectionData, (globalStatus : GlobalStatus) => {
    adaptToCurrentStatus(globalStatus, navigate)
  })

  useSocketListener(socketEvents.global.cancel, () => navigate("/"))
  useSocketListener(socketEvents.menu.share, () => navigate("/share"))
  useSocketListener(socketEvents.menu.join, () => navigate("/join"))
  useSocketListener(socketEvents.menu.create, () => navigate("/create"))
  useSocketListener(socketEvents.joinCall.validate, ({ meetingId, defaultParams }: NewMeetingProps) =>
    navigate(`/meeting/${meetingId}`, {
      isAlreadyMuted: defaultParams.audioMuted,
      isCameraAlreadyOn: !defaultParams.videoMuted,
      isHandAlreadyRaised: false,
      isAlreadyAskingToShareScreen: false,
      isAlreadySharingScreen: false
    })
  )
  useSocketListener(socketEvents.createCall.validate, ({ meetingId, defaultParams }: NewMeetingProps) =>
    navigate(`/meeting/${meetingId}`, {
      isAlreadyMuted: defaultParams.audioMuted,
      isCameraAlreadyOn: !defaultParams.videoMuted,
      isHandAlreadyRaised: false,
      isAlreadyAskingToShareScreen: false,
      isAlreadySharingScreen: false
    })
  )
  return (
    <Switch>
      <Route path="/share" element={<SharingPage />} />
      <Route path="/meeting/:meetingId" element={
        <MeetingPage />
      } />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/" element={<HomeMenu />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}

export default Routes
