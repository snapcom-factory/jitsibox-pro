export { socketEvents } from "./socketEvents"

export type {
  GlobalStatus,
  ServerToControllerEvents,
  ControllerToServerEvents,
  ServerToMainScreenEvents,
  MainScreenToServerEvents,
  ServerToClientEvents,
  ClientToServerEvents,
} from "./socketEvents"

export {
  token,
  roomName,
  controllersApiURL,
  mainScreenApiURL,
  controllersURL,
  mainScreenURL,
} from "./constants"
