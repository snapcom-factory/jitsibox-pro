import { Button, Fade, Stack, SvgIconTypeMap, Typography } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ControllerToServerEvents } from "../../../../packages/model/src"
import { useSocketContext } from "@/services/socket"

interface EventArguments {
  name: keyof ControllerToServerEvents & string
  payload?: boolean
}
interface ActionButtonProps {
  color: "primary" | "secondary"
  text?: string
  Icon: OverridableComponent<SvgIconTypeMap>
  event: EventArguments
}

const ActionButton = ({
  color,
  text,
  Icon,
  event,
}: ActionButtonProps): React.ReactElement => {
  const { socket } = useSocketContext()
  const handleClick = () => {
    if (socket !== null) {
      if (event.payload === undefined) {
        socket.emit(event.name)
      } else {
        socket.emit(event.name, event.payload)
      }
    }
  }
  return (
    <Fade in>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          color={color}
          sx={{ fontSize: 70, height: 125, width: 125, borderRadius: 20 }}
          onClick={handleClick}
        >
          <Icon fontSize="inherit" />
        </Button>
        {text !== undefined && (
          <Typography align="center" variant="subtitle2" color={color}>
            {text}
          </Typography>
        )}
      </Stack>
    </Fade>
  )
}

export default ActionButton
