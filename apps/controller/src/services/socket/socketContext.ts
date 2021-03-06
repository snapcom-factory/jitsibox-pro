import { createContext } from "react"
import { Socket } from "socket.io-client"
import {
  ControllerToServerEvents,
  ServerToControllerEvents,
} from "@/model"

export interface SocketContextType {
  socket: Socket<ServerToControllerEvents, ControllerToServerEvents> | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

export default SocketContext
