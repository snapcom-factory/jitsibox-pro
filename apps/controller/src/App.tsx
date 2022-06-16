import { ThemeProvider } from "@mui/material"
import defaultTheme from "@/services/theme"
import Routes from "@/Routes"
import { SocketProvider } from "./services/socket"

const App = (): React.ReactElement => (
  <ThemeProvider theme={defaultTheme}>
    <SocketProvider>
      <Routes />
    </SocketProvider>
  </ThemeProvider>
)

export default App
