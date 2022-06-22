import { Button, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

interface MeetingButtonProps {
  color: "primary" | "secondary"
  Icon: OverridableComponent<SvgIconTypeMap>
}

const MeetingButton = ({
  color,
  Icon,
}: MeetingButtonProps): React.ReactElement => (
  <Button
    variant="contained"
    color={color}
    sx={{ fontSize: 70, height: 115, width: 115, borderRadius: 20 }}
  >
    <Icon fontSize="inherit" />
  </Button>
)

export default MeetingButton
