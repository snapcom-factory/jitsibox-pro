import { useEffect, useMemo, useState } from "react"
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from "@mui/material"
import { useLocation } from "react-router-dom"
import SnackbarContext, {
  SnackbarContextType,
} from "@/services/snackbar/snackbarContext"

interface SnackbarProviderProps {
  children: React.ReactNode
}

const SnackbarProvider = ({
  children,
}: SnackbarProviderProps): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false)
  const [sbMessage, setMessage] = useState<string>("")
  const [sbSeverity, setSeverity] = useState<AlertColor>("success")
  const [sbPosition, setPosition] = useState<SnackbarOrigin>({
    vertical: "bottom",
    horizontal: "center",
  })
  const [sbAutoHideDuration, setAutoHideDuration] = useState<number | null>(
    null
  )

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])

  const contextValue: SnackbarContextType = useMemo<SnackbarContextType>(
    () => ({
      openSnackbar: (
        severity: AlertColor,
        position: SnackbarOrigin,
        message: string,
        autoHideDuration?: number
      ) => {
        setOpen(true)
        setSeverity(severity)
        setPosition(position)
        setMessage(message)
        if (autoHideDuration !== undefined) {
          setAutoHideDuration(autoHideDuration)
        } else {
          setAutoHideDuration(null)
        }
      },
    }),
    []
  )

  return (
    <SnackbarContext.Provider value={contextValue}>
      <Snackbar
        open={open}
        autoHideDuration={sbAutoHideDuration}
        anchorOrigin={sbPosition}
        onClose={handleClose}
      >
        <Alert severity={sbSeverity}>
          <Typography variant="subtitle2" sx={{ paddingBottom: 0.5 }}>
            {sbMessage}
          </Typography>
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider
