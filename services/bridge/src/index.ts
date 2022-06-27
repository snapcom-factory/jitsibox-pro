import express from "express"
import http from "http"
import path from "path"
import { Server, Socket } from "socket.io"
import { ExtendedError } from "socket.io/dist/namespace"
import { globalStatus, localStatus } from "./status"
import {
  token,
  controllersURL,
  mainScreenURL,
  ServerToClientEvents,
  ClientToServerEvents,
  socketEvents,
} from "../../../packages/model/src"
import socketControllers from "./controllers"
import socketMainScreen from "./mainScreens"

const port = 3001

const app = express()
const server = http.createServer(app)

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: [controllersURL, mainScreenURL],
    methods: ["GET"],
  },
})

// TODO : Enlever après les tests
app.use(express.static(path.resolve(__dirname, "../../../../front_mock")))

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})

// Authentication middleware for controllers
io.of("/controllers").use(
  (
    socket: Socket<ClientToServerEvents, ServerToClientEvents>,
    next: (err?: ExtendedError | undefined) => void
  ) => {
    const providedToken = socket.handshake.auth.token
    if (providedToken !== token) {
      next(new Error("Authentication error"))
    } else {
      next()
    }
  }
)

// Authentication middleware for main screen
io.of("/mainScreens").use(
  (
    socket: Socket<ClientToServerEvents, ServerToClientEvents>,
    next: (err?: ExtendedError | undefined) => void
  ) => {
    const providedToken = socket.handshake.auth.token
    if (providedToken !== token) {
      next(new Error("Authentication error"))
    } else if (localStatus.mainScreenId !== "") {
      next(new Error("Main screen already connected"))
    } else {
      localStatus.mainScreenId = socket.id
      next()
    }
  }
)

// Controllers connection
io.of("/controllers").on(
  "connection",
  (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
    socket.emit(socketEvents.global.connectionData, globalStatus)
    socket.join(socket.handshake.auth.roomName)
    socketControllers(io, socket)
  }
)

// Main screen connection
io.of("/mainScreens").on(
  "connection",
  (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {
    socket.emit(socketEvents.global.connectionData, globalStatus)
    socket.join(socket.handshake.auth.roomName)
    socketMainScreen(io, socket)
  }
)
