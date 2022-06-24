import { Button, Fade, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ControllerToServerEvents } from "@jitsi-box-pro/model"
import { useSocketContext } from "@/services/socket"
import CenteringDiv from "./utils/CenteringDiv"

interface EventArguments {
  name: keyof ControllerToServerEvents & string
  payload?: boolean
}
interface MeetingButtonProps {
  color: "primary" | "secondary"
  Icon: OverridableComponent<SvgIconTypeMap>
  event: EventArguments
}

const MeetingButton = ({
  color,
  Icon,
  event,
}: MeetingButtonProps): React.ReactElement => {
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
      <CenteringDiv>
        <Button
          variant="contained"
          color={color}
          sx={{ fontSize: 70, height: 115, width: 115, borderRadius: 20 }}
          onClick={handleClick}
        >
          <Icon fontSize="inherit" />
        </Button>
      </CenteringDiv>
    </Fade>
  )
}

export default MeetingButton
