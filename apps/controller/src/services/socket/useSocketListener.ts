import { useEffect } from "react"

import { ServerToControllerEvents } from "../../../../../packages/model/src"
import { useSocketContext } from "@/services/socket"

const useSocketListener = (
  eventName: keyof ServerToControllerEvents & string,
  eventCallback: (...args: any[]) => void
) => {
  const { socket } = useSocketContext()
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
