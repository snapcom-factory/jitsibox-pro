import { useContext } from "react"
import SocketContext, {
  SocketContextType,
} from "@/services/socket/socketContext"

const useSocketContext = () => {
  const socketCtx = useContext<SocketContextType | undefined>(SocketContext)
  if (socketCtx === undefined) {
    throw new Error("No SocketProvider was provided")
  }
  return socketCtx
}

export default useSocketContext
