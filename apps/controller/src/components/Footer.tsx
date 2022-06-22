import { Stack, Typography } from "@mui/material"

const Footer = (): React.ReactElement => (
  <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
        Jitsi-Box
      </Typography>
      <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
        Controller #1234
      </Typography>
    </Stack>
  </Stack>
)

export default Footer
