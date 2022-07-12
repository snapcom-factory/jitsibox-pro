import { useEffect } from "react"

import { ServerToMainScreenEvents } from "../../../../../packages/model/src"
import { useSocketContext } from "@/services/socket"

const useSocketListener = (
  eventName: keyof ServerToMainScreenEvents & string,
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
