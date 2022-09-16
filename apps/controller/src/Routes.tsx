import { Routes as Switch, Route } from "react-router-dom"
import {
  NewMeetingProps,
  GlobalStatus,
  socketEvents,
} from "@/model"
import { useCustomNavigate, CustomNavigateFunction } from "@/services/navigate"
import {
  HomeMenu,
  SharingPage,
  MeetingPage,
  NotFound,
  JoinPage,
  CreatePage,
} from "@/views"
import { useSocketListener } from "@/services/socket"

const adaptToCurrentStatus = (
  statusFromSocket: GlobalStatus,
  navigate: CustomNavigateFunction
) => {
  switch (statusFromSocket.global.page) {
    case "localSharing":
      navigate("/share")
      break
    case "joiningCall":
      navigate("/join", { isLoading: statusFromSocket.keyboardMenu.loading })
      break
    case "creatingCall":
      navigate("/create", { isLoading: statusFromSocket.keyboardMenu.loading })
      break
    case "meeting":
      navigate(`/meeting/${statusFromSocket.meeting.meetingId}`, {
        isAlreadyMuted: statusFromSocket.meeting.isMuted,
        isCameraAlreadyOn: statusFromSocket.meeting.isCameraOn,
        isHandAlreadyRaised: statusFromSocket.meeting.isHandRaised,
        isChatAlreadyDisplayed: statusFromSocket.meeting.isChat,
        isAlreadyAskingToShareScreen:
          statusFromSocket.meeting.isAskingToShareScreen,
        numberOfParticipants: statusFromSocket.meeting.participants,
      })
      break
    default:
      navigate("/")
      break
  }
}

const Routes = (): React.ReactElement => {
  const navigate = useCustomNavigate()

  useSocketListener(
    socketEvents.global.connectionData,
    (globalStatus: GlobalStatus) => {
      adaptToCurrentStatus(globalStatus, navigate)
    }
  )

  useSocketListener(socketEvents.global.cancel, () => navigate("/"))
  useSocketListener(socketEvents.menu.share, () => navigate("/share"))
  useSocketListener(socketEvents.menu.join, () => navigate("/join"))
  useSocketListener(socketEvents.menu.create, () => navigate("/create"))
  useSocketListener(
    socketEvents.joinCall.validate,
    ({ meetingId, numberOfParticipants, defaultParams }: NewMeetingProps) =>
      navigate(`/meeting/${meetingId}`, {
        isAlreadyMuted: defaultParams.audioMuted,
        isCameraAlreadyOn: !defaultParams.videoMuted,
        isHandAlreadyRaised: false,
        isChatAlreadyDisplayed: false,
        isAlreadyAskingToShareScreen: false,
        numberOfParticipants,
      })
  )
  useSocketListener(
    socketEvents.createCall.validate,
    ({ meetingId, numberOfParticipants, defaultParams }: NewMeetingProps) =>
      navigate(`/meeting/${meetingId}`, {
        isAlreadyMuted: defaultParams.audioMuted,
        isCameraAlreadyOn: !defaultParams.videoMuted,
        isHandAlreadyRaised: false,
        isChatAlreadyDisplayed: false,
        isAlreadyAskingToShareScreen: false,
        numberOfParticipants,
      })
  )
  return (
    <Switch>
      <Route path="/share" element={<SharingPage />} />
      <Route path="/meeting/:meetingId" element={<MeetingPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/" element={<HomeMenu />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}

export default Routes
