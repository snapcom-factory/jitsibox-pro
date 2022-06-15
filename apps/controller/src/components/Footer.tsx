import { Stack, SxProps, Theme, Typography } from "@mui/material"

export interface FooterProps {
  sx?: SxProps<Theme> | undefined
}

const Footer = ({ sx }: FooterProps): React.ReactElement => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="flex-end"
    sx={{
      ...sx,
    }}
  >
    <Typography>Footer placeholder</Typography>
  </Stack>
)

export default Footer
