import { ArrowCircleLeft } from "@mui/icons-material"
import { ButtonBase, Stack, Typography } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { useSocketContext } from "@/services/socket"

const ReturnToMenuButton = () => {
  const { socket } = useSocketContext()
  const handleClick = () => {
    if (socket !== null) {
      socket.emit(socketEvents.global.cancel)
    }
  }
  return (
    <ButtonBase onClick={handleClick}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <ArrowCircleLeft fontSize="large" color="primary" />
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ paddingBottom: 0.7 }}
        >
          Retourner au menu
        </Typography>
      </Stack>
    </ButtonBase>
  )
}

export default ReturnToMenuButton
