import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import Routes from "@/Routes"
import { SocketProvider } from "@/services/socket"
import { countryTheme } from "@/services/theme"

const App = (): React.ReactElement => (
  <ThemeProvider theme={countryTheme}>
    <SocketProvider>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </SocketProvider>
  </ThemeProvider>
)

export default App
