import { Backdrop, CircularProgress, Typography, Stack } from "@mui/material"

const ReconnectingBackdrop = () => (
  <Backdrop
    open
    sx={{
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Typography variant="h3">Reconnexion...</Typography>
      <CircularProgress color="inherit" />
    </Stack>
  </Backdrop>
)

export default ReconnectingBackdrop
