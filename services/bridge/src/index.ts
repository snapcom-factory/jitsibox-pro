import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { globalStatus, localStatus } from "./status";
import socketControllers from "./controllers";
import socketMainScreen from "./mainScreen";

const port = process.env.PORT || 3001

const app = express()
const server = http.createServer(app);

const io = new Server(server);

// TODO : Enlever après les tests
app.use(express.static(__dirname + "/front_mock"))

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})

// Authentication middleware
io.use((socket : Socket, next : Function) => {
  const providedToken = socket.handshake.auth.token
  if (providedToken !== "let me in") {
    next(new Error("Authentication error"))
  } else {
    if (socket.handshake.auth.controllerName === "controller") {
      if (localStatus.mainScreenId !== "") {
        next(new Error("Main screen already connected"))
      } else {
        localStatus.mainScreenId = socket.id
        next()
      }
    } else {
      next()
    }
  }
})

// Controllers connection
io.of("/controllers").on("connection", (socket : Socket) => {
  socket.emit("connection-data", globalStatus);
  socket.join(`${socket.handshake.auth.roomName}`);
  socketControllers(io, socket);
})

// Main screen connection
io.of("/mainScreen").on("connection", (socket : Socket) => {
  socket.emit("connection-data", globalStatus);
  socket.join(`${socket.handshake.auth.roomName}`);
  socketMainScreen(io, socket);
})
