import { useEffect, useMemo, useState } from "react"
import { io, Socket } from "socket.io-client"
import SocketContext, {
  SocketContextType,
} from "@/services/socket/socketContext"

interface SocketProviderProps {
  children: React.ReactNode
}

const SocketProvider = ({
  children,
}: SocketProviderProps): React.ReactElement => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const newSocket = io()
    newSocket.on("connect", () => {})
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, [])

  const contextValue = useMemo<SocketContextType>(
    () => ({
      socket,
    }),
    [socket]
  )
  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
