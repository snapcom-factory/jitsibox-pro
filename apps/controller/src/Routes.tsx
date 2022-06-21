import { useEffect } from "react"
import { Routes as Switch, Route, useNavigate } from "react-router-dom"
import { Socket } from "socket.io-client"
import {
  ControllerToServerEvents,
  ServerToControllerEvents,
  socketEvents,
} from "@jitsi-box-pro/model"
import { HomeMenu, SharingPage } from "@/views"
import { useSocketContext } from "@/services/socket"

const useSocketNavigate = (
  socket: Socket<ServerToControllerEvents, ControllerToServerEvents> | null,
  eventName: keyof ServerToControllerEvents & (string | symbol),
  naviguateCallback: (...args: any[]) => void
) => {
  useEffect(() => {
    if (socket != null) {
      socket.on(eventName, naviguateCallback)
      return () => {
        socket.off(eventName)
      }
    }
    return undefined
  }, [socket, naviguateCallback])
}

const Routes = (): React.ReactElement => {
  const { socket } = useSocketContext()
  const navigate = useNavigate()

  useSocketNavigate(socket, socketEvents.global.cancel, () => navigate("/"))
  useSocketNavigate(socket, socketEvents.menu.share, () => navigate("/share"))
  useSocketNavigate(socket, socketEvents.menu.join, () => navigate("/join"))
  useSocketNavigate(socket, socketEvents.menu.create, () => navigate("/create"))
  useSocketNavigate(
    socket,
    socketEvents.joinCall.validate,
    (meetingId: string) => navigate(`/meeting/${meetingId}`)
  )
  useSocketNavigate(
    socket,
    socketEvents.createCall.validate,
    (meetingId: string) => navigate(`/meeting/${meetingId}`)
  )
  return (
    <Switch>
      <Route path="/share" element={<SharingPage />} />
      <Route path="/meeting/:meetingId" element={<div>Meeting page</div>} />
      <Route path="/join" element={<div>Join page</div>} />
      <Route path="/create" element={<div>Create page</div>} />
      <Route path="/" element={<HomeMenu />} />
    </Switch>
  )
}

export default Routes
