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
      <Stack direction="column" sx={{ width: "20vh" }}>
        <MarianneLogo />
        <Typography variant="h6" sx={{ paddingTop: 1, lineHeight: 1.1 }}>
          WEBCONFÉRENCE DE L&apos;ÉTAT
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
