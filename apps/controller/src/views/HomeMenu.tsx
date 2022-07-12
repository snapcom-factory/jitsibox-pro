import { Grid, Container } from "@mui/material"
import { Add, PresentToAll, Videocam } from "@mui/icons-material"
import { socketEvents } from "@/model"
import { MenuButton, Header, Footer, ViewContainer } from "@/components"

const HomeMenu = (): React.ReactElement => (
  <ViewContainer header={<Header />} footer={<Footer />}>
    <Container
      maxWidth="md"
      sx={{
        paddingBottom: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Grid container spacing={8} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <MenuButton
            text="Créer une réunion"
            Icon={Add}
            eventName={socketEvents.menu.create}
          />
        </Grid>
        <Grid item xs={4}>
          <MenuButton
            text="Rejoindre une réunion"
            Icon={Videocam}
            eventName={socketEvents.menu.join}
          />
        </Grid>
        <Grid item xs={4}>
          <MenuButton
            text="Partager l'écran"
            Icon={PresentToAll}
            eventName={socketEvents.menu.share}
          />
        </Grid>
      </Grid>
    </Container>
  </ViewContainer>
)

export default HomeMenu
