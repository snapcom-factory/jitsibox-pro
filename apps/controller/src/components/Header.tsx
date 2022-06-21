import { Grid, Stack, Typography } from "@mui/material"

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
      <Typography>Header placeholder</Typography>
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
