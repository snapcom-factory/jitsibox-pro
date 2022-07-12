import { Typography, Stack, Grid } from "@mui/material"
import { Close } from "@mui/icons-material"
import { socketEvents } from "../../../../packages/model/src"
import {
  ViewContainer,
  Header,
  Footer,
  ActionButton,
  ReturnToMenuButton,
} from "@/components"

const SharingPage = () => (
  <ViewContainer
    header={<Header endContent={<ReturnToMenuButton />} />}
    footer={<Footer />}
  >
    <Stack
      direction="column"
      justifyContent="center"
      sx={{
        height: "100%",
        mx: 8,
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">
            Pour partager votre ordinateur sur l&apos;écran, brancher le câble
            HDMI à votre ordinateur.
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <ActionButton
            text="Arrêter le partage"
            color="secondary"
            Icon={Close}
            event={{ name: socketEvents.global.cancel }}
          />
        </Grid>
      </Grid>
    </Stack>
  </ViewContainer>
)

export default SharingPage
