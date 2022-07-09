export { socketEvents } from "./socketEvents"

export type {
  NewMeetingProps,
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
