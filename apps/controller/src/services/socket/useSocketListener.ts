import { useEffect } from "react"
import { Socket } from "socket.io-client"
import {
  ControllerToServerEvents,
  ServerToControllerEvents,
} from "@jitsi-box-pro/model"

const useSocketListener = (
  socket: Socket<ServerToControllerEvents, ControllerToServerEvents> | null,
  eventName: keyof ServerToControllerEvents & string,
  eventCallback: (...args: any[]) => void
) => {
  useEffect(() => {
    if (socket != null) {
      socket.on(eventName, eventCallback)
      return () => {
        socket.off(eventName, eventCallback)
      }
    }
    return undefined
  }, [socket, eventCallback])
}

export default useSocketListener
