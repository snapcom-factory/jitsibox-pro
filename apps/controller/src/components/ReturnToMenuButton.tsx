import { ArrowCircleLeft } from "@mui/icons-material"
import { ButtonBase, Stack, Typography } from "@mui/material"
import { socketEvents } from "../../../../packages/model/src"
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
        spacing={1}
      >
        <ArrowCircleLeft fontSize="large" color="primary" />
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{ paddingBottom: 0.5 }}
        >
          Retourner au menu
        </Typography>
      </Stack>
    </ButtonBase>
  )
}

export default ReturnToMenuButton
