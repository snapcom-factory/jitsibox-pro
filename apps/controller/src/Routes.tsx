import { Routes as Switch, Route, useNavigate, NavigateFunction } from "react-router-dom"
import { GlobalStatus, socketEvents } from "@jitsi-box-pro/model"
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
  statusFromSocket : GlobalStatus,
  navigate : NavigateFunction
) => {
  switch (statusFromSocket.global.page) {
    case "localSharing":
      navigate(
        "/share",
        {state: { isPlugged: statusFromSocket.localSharing.isPlugged }}
      );
      break;
    case "joiningCall":
      navigate(
        "/join",
        {state: { isLoading: statusFromSocket.keyboardMenu.loading }}
      );
      break;
    case "creatingCall":
      navigate(
        "/create",
        {state: { isLoading: statusFromSocket.keyboardMenu.loading }}
      );
      break;
    case "meeting":
      navigate(
        `/meeting/${statusFromSocket.meeting.meetingId}`,
        {state: {
          isAlreadyMuted: statusFromSocket.meeting.isMuted,
          isCameraAlreadyOn: statusFromSocket.meeting.isCameraOn,
          isHandAlreadyRaised: statusFromSocket.meeting.isHandRaised,
          isAlreadyAskingToShareScreen: statusFromSocket.meeting.isAskingToShareScreen,
          isAlreadySharingScreen: statusFromSocket.meeting.isSharingScreen,
        }});
      break;
    default:
      navigate("/");
  }
}

const Routes = (): React.ReactElement => {
  const navigate = useNavigate()

  useSocketListener(socketEvents.global.connectionData, (globalStatus : GlobalStatus) => adaptToCurrentStatus(globalStatus, navigate))

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
      <Route path="/meeting/:meetingId" element={<MeetingPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/" element={<HomeMenu />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}

export default Routes
