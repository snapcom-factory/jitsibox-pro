import { Stack, SxProps, Theme, Typography } from "@mui/material"

export interface BaseHeaderProps {
  children?: React.ReactNode
  sx?: SxProps<Theme> | undefined
}

const BaseHeader = ({ children, sx }: BaseHeaderProps) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
    sx={{
      ...sx,
    }}
  >
    <Typography>Header placeholder</Typography>
    {children}
  </Stack>
)

export default BaseHeader
