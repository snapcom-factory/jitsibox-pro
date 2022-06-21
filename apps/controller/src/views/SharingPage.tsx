import { Typography, Stack, Grid } from "@mui/material"
import { ViewContainer, BaseHeader, Footer } from "@/components"

const SharingPage = () => (
  <ViewContainer Header={BaseHeader} Footer={Footer}>
    <Stack
      direction="column"
      justifyContent="center"
      sx={{
        height: "100%",
        mx: 8,
        paddingBottom: 6,
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={7}>
          <Typography variant="h3">
            Pour partager votre écran sur la télévision, brancher le cable hdmi
            à votre ordinateur.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </ViewContainer>
)

export default SharingPage
