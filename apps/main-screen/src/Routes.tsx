import { Routes as Switch, Route, useNavigate } from "react-router-dom"
import { socketEvents } from "@jitsi-box-pro/model"
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
      <Route path="/share" element={<div>Share</div>} />
      <Route path="/meeting/:meetingId" element={<div>Meeting</div>} />
      <Route path="/join" element={<div>Join</div>} />
      <Route path="/create" element={<div>Create</div>} />
      <Route path="/" element={<div>Menu</div>} />
      <Route path="*" element={<div>Not found</div>} />
    </Switch>
  )
}

export default Routes
