import { useEffect, useMemo, useState } from "react"
import { io, Socket } from "socket.io-client"
import {
  ServerToControllerEvents,
  ControllerToServerEvents,
} from "@jitsi-box-pro/model"
import SocketContext, {
  SocketContextType,
} from "@/services/socket/socketContext"

interface SocketProviderProps {
  children: React.ReactNode
}

const SocketProvider = ({
  children,
}: SocketProviderProps): React.ReactElement => {
  const [socket, setSocket] = useState<Socket<
    ServerToControllerEvents,
    ControllerToServerEvents
  > | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    const newSocket = io()
    newSocket.on("connect", () => {
      setIsConnected(true)
    })
    newSocket.on("connect_error", () => {
      setIsConnected(false)
      setTimeout(() => {
        newSocket.connect()
      }, 1000)
    })
    newSocket.on("disconnect", () => {
      setIsConnected(false)
    })
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, [])

  const contextValue = useMemo<SocketContextType>(
    () => ({
      socket,
      isConnected,
    }),
    [socket, isConnected]
  )
  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
