import { Grid, Stack, Typography } from "@mui/material"
import MarianneLogo from "@/assets/Marianne.svg?component"

export interface HeaderProps {
  middleContent?: React.ReactNode
  endContent?: React.ReactNode
}

const Header = ({
  middleContent,
  endContent,
}: HeaderProps): React.ReactElement => (
  <Grid container direction="row" alignItems="center">
    <Grid item xs>
      <Stack direction="column">
        <MarianneLogo height="2rem" />
        <Typography variant="h4" sx={{ paddingTop: 0.5 }}>
          WEBCONFÉRENCE <br /> DE L&apos;ÉTAT
        </Typography>
      </Stack>
    </Grid>
    {middleContent && (
      <Grid item xs>
        <Stack direction="row" justifyContent="center">
          {middleContent}
        </Stack>
      </Grid>
    )}
    {endContent && (
      <Grid item xs>
        <Stack direction="row" justifyContent="flex-end">
          {endContent}
        </Stack>
      </Grid>
    )}
  </Grid>
)

export default Header
