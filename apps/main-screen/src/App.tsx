import { BrowserRouter } from "react-router-dom"
import Routes from "@/Routes"
import { SocketProvider } from "@/services/socket"

const App = (): React.ReactElement => (
  <SocketProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  </SocketProvider>
)

export default App
