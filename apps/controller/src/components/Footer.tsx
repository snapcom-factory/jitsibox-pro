import { Stack, Typography } from "@mui/material"

const Footer = (): React.ReactElement => (
  <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Typography variant="caption">
        Jitsi-Box <br /> Controller #1234
      </Typography>
    </Stack>
  </Stack>
)

export default Footer
