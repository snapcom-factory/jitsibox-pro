import { Grid, Stack, Typography } from "@mui/material"
import MarianneLogo from "@/assets/logo_fr.svg?component"

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
          {`${import.meta.env.VITE_COMPANY_NAME}`}
          <br />
          {`${import.meta.env.VITE_COMPANY_NAME2}`}
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
