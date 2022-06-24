import { Routes as Switch, Route, useNavigate } from "react-router-dom"
import { socketEvents } from "@jitsi-box-pro/model"
import { HomeMenu, SharingPage, MeetingPage } from "@/views"
import { useSocketListener } from "@/services/socket"

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
  return (
    <Switch>
      <Route path="/share" element={<SharingPage />} />
      <Route path="/meeting/:meetingId" element={<MeetingPage />} />
      <Route path="/join" element={<div>Join page</div>} />
      <Route path="/create" element={<div>Create page</div>} />
      <Route path="/" element={<HomeMenu />} />
    </Switch>
  )
}

export default Routes
