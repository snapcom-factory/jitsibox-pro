import { createContext } from "react"
import { AlertColor, SnackbarOrigin } from "@mui/material"

export interface SnackbarContextType {
  openSnackbar: (
    severity: AlertColor,
    position: SnackbarOrigin,
    message: string,
    autoHideDuration?: number
  ) => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
)

export default SnackbarContext
