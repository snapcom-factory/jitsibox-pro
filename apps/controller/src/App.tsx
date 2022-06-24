import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import defaultTheme from "@/services/theme"
import Routes from "@/Routes"
import { SocketProvider } from "@/services/socket"

const App = (): React.ReactElement => (
  <ThemeProvider theme={defaultTheme}>
    <SocketProvider>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </SocketProvider>
  </ThemeProvider>
)

export default App
