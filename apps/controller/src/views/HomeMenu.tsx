import { Grid, Container } from "@mui/material"
import { Add, PresentToAll, Videocam } from "@mui/icons-material"
import { MenuButton, BaseHeader, Footer, ViewContainer } from "@/components"

const HomeMenu: React.FC = () => (
  <ViewContainer Header={BaseHeader} Footer={Footer}>
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
          <MenuButton text="Créer une réunion" Icon={Add} />
        </Grid>
        <Grid item xs={4}>
          <MenuButton text="Rejoindre une réunion" Icon={Videocam} />
        </Grid>
        <Grid item xs={4}>
          <MenuButton text="Partager l'écran" Icon={PresentToAll} />
        </Grid>
      </Grid>
    </Container>
  </ViewContainer>
)

export default HomeMenu
