import { Button, Stack, SvgIconTypeMap, Typography } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { ControllerToServerEvents } from "@/model"
import { useSocketContext } from "@/services/socket"

interface MenuButtonProps {
  text: string
  Icon: OverridableComponent<SvgIconTypeMap>
  eventName: keyof ControllerToServerEvents & string
}

const MenuButton = ({
  text,
  Icon,
  eventName,
}: MenuButtonProps): React.ReactElement => {
  const { socket } = useSocketContext()
  const handleClick = () => {
    if (socket !== null) {
      socket.emit(eventName)
    }
  }
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Button
        variant="contained"
        sx={{
          fontSize: 80,
          height: 150,
          width: 150,
          borderRadius: 20,
        }}
        onClick={handleClick}
      >
        <Icon fontSize="inherit" />
      </Button>
      <Typography align="center" variant="subtitle1" color="primary">
        {text}
      </Typography>
    </Stack>
  )
}

export default MenuButton
