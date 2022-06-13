import { ThemeProvider } from "@mui/material"
import defaultTheme from "@/services/theme"
import Routes from "@/Routes"

const App = (): React.ReactElement => (
  <ThemeProvider theme={defaultTheme}>
    <Routes />
  </ThemeProvider>
)

export default App
