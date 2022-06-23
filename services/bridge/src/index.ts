import express from "express";
import http from "http";
import path from "path";
import { Server, Socket } from "socket.io";
import { globalStatus, localStatus } from "./status";
import socketControllers from "./controllers";
import socketMainScreen from "./mainScreen";

const port = 3001

const app = express()
const server = http.createServer(app);

const io = new Server(server,  {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// TODO : Enlever après les tests
app.use(express.static(path.resolve(__dirname, "../../../../front_mock")))

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})

// Authentication middleware for controllers
io.of("/controllers").use((socket : Socket, next : Function) => {
  const providedToken = socket.handshake.auth.token
  console.log("controller entered here");
  if (providedToken !== "let me in") {
    console.log("bad controller token");
    next(new Error("Authentication error"))
  } else { console.log("good controller token"); next() }
});

// Authentication middleware for main screen
io.of("/mainScreen").use((socket : Socket, next : Function) => {
  const providedToken = socket.handshake.auth.token
  console.log("main screen entered here");
  if (providedToken !== "let me in") {
    console.log("bad main screen token");
    next(new Error("Authentication error"))
  } else {
    if (localStatus.mainScreenId !== "") {
      console.log("main screen already connected");
      next(new Error("Main screen already connected"))
    } else {
      localStatus.mainScreenId = socket.id
      console.log("good main screen token");
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
  socketMainScreen(socket);
})
