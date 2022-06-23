import { Box, BoxProps, styled } from "@mui/material"

const CenteringDiv = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

export default CenteringDiv
