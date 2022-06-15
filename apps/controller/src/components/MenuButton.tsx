import { Button, Stack, SvgIconTypeMap, Typography } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

interface MenuButtonProps {
  text: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const MenuButton = ({ text, Icon }: MenuButtonProps): React.ReactElement => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={3}
  >
    <Button
      variant="contained"
      sx={{ fontSize: 80, height: 130, width: 130, borderRadius: 4 }}
    >
      <Icon fontSize="inherit" />
    </Button>
    <Typography align="center" variant="h6">
      {text}
    </Typography>
  </Stack>
)

export default MenuButton
