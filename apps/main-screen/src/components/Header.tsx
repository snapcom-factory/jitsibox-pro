import { Grid, Stack, Typography } from "@mui/material"
import MarianneLogo from "@/assets/Marianne.svg?component"

const Header = (): React.ReactElement => (
  <Grid container direction="row" alignItems="center">
    <Grid item xs>
      <Stack direction="column">
        <MarianneLogo height="2rem" />
        <Typography variant="h4" sx={{ paddingTop: 0.5 }}>
          WEBCONFÉRENCE <br /> DE L&apos;ÉTAT
        </Typography>
      </Stack>
    </Grid>
  </Grid>
)

export default Header
