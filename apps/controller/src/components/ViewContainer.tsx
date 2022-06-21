import { Box, Grid } from "@mui/material"
import { useSocketContext } from "@/services/socket"
import { ReconnectingBackdrop } from "@/components"
import { HeaderProps } from "./Header"

interface AppContainerProps {
  children: React.ReactNode
  header: React.ReactElement<HeaderProps>
  footer: React.ReactElement
}

const ViewContainer = ({
  children,
  header,
  footer,
}: AppContainerProps): React.ReactElement => {
  const { isConnected } = useSocketContext()

  return (
    <>
      {!isConnected ? <ReconnectingBackdrop /> : null}
      <Grid
        container
        direction="column"
        style={{
          minHeight: "100vh",
          minWidth: "100vh",
        }}
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              flex: 1,
              mx: 5,
              my: 3,
            }}
          >
            {header}
          </Box>
        </Grid>
        <Grid item xs>
          {/* Main content */}
          {children}
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Footer */}
          <Box
            sx={{
              flex: 1,
              mx: 5,
              my: 4,
            }}
          >
            {footer}
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ViewContainer
