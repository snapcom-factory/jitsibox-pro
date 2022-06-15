import { Grid, SxProps, Theme } from "@mui/material"
import { FooterProps } from "@/components/Footer"
import { BaseHeaderProps } from "@/components/BaseHeader"

export interface HeaderProps extends BaseHeaderProps {
  sx: SxProps<Theme>
}

interface AppContainerProps {
  children: React.ReactNode
  Header: React.FC<HeaderProps>
  Footer: React.FC<FooterProps>
}

const ViewContainer = ({
  children,
  Header,
  Footer,
}: AppContainerProps): React.ReactElement => (
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
      <Header
        sx={{
          flex: 1,
          mx: 5,
          my: 3,
        }}
      />
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
      <Footer
        sx={{
          flex: 1,
          mx: 5,
          my: 4,
        }}
      />
    </Grid>
  </Grid>
)

export default ViewContainer
