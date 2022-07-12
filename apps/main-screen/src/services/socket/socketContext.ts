import { createContext } from "react"
import { Socket } from "socket.io-client"
import {
  MainScreenToServerEvents,
  ServerToMainScreenEvents,
} from "@/model"

export interface SocketContextType {
  socket: Socket<ServerToMainScreenEvents, MainScreenToServerEvents> | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

export default SocketContext
