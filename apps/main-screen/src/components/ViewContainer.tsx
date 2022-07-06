import { Box, Grid } from "@mui/material"
import { useSocketContext } from "@/services/socket"
import { Header, ReconnectingBackdrop } from "@/components"

interface AppContainerProps {
  children: React.ReactNode
}

const ViewContainer = ({ children }: AppContainerProps): React.ReactElement => {
  const { isConnected } = useSocketContext()

  return (
    <>
      {!isConnected ? <ReconnectingBackdrop /> : null}
      <Grid
        container
        direction="column"
        sx={{
          minHeight: "100vh",
          minWidth: "100vh",
          paddingBottom: 12,
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
            <Header />
          </Box>
        </Grid>
        <Grid item xs>
          {/* Main content */}
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default ViewContainer
