import { IFrame } from "./iframe"
import { SocketProvider } from "@/services/socket"

const App = (): React.ReactElement => (
  <SocketProvider>
    <IFrame />
  </SocketProvider>
)

export default App
