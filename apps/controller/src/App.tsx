import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { countryTheme } from "@/services/theme"
import Routes from "@/Routes"
import { SocketProvider } from "@/services/socket"
import { SnackbarProvider } from "@/services/snackbar"

const App = (): React.ReactElement => (
  <ThemeProvider theme={countryTheme}>
    <SocketProvider>
      <BrowserRouter>
        <SnackbarProvider>
          <CssBaseline />
          <Routes />
        </SnackbarProvider>
      </BrowserRouter>
    </SocketProvider>
  </ThemeProvider>
)

export default App
