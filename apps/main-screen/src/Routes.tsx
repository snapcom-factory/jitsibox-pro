import {
  Routes as Switch,
  Route,
  useNavigate,
  NavigateFunction,
} from "react-router-dom"
import { socketEvents, GlobalStatus } from "@/model"
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
  navigate: NavigateFunction
) => {
  switch (statusFromSocket.global.page) {
    case "localSharing":
      navigate("/share")
      break
    case "joiningCall":
      navigate("/join")
      break
    case "creatingCall":
      navigate("/create")
      break
    case "meeting":
      navigate(`/meeting/${statusFromSocket.meeting.meetingId}`, {
        state: {
          isAlreadyMuted: statusFromSocket.meeting.isMuted,
          isVideoAlreadyMuted: !statusFromSocket.meeting.isCameraOn,
          isHandAlreadyRaised: statusFromSocket.meeting.isHandRaised,
          isAlreadyAskingToShareScreen:
            statusFromSocket.meeting.isAskingToShareScreen,
        },
      })
      break
    default:
      navigate("/")
      break
  }
}

const Routes = (): React.ReactElement => {
  const navigate = useNavigate()

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
  useSocketListener(
    socketEvents.global.connectionData,
    (statusFromSocket: GlobalStatus) =>
      adaptToCurrentStatus(statusFromSocket, navigate)
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
