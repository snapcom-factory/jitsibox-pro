import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import { ViewContainer } from "@/components"

const NotFound = () => (
  <ViewContainer>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={16}
      sx={{
        height: "100%",
        paddingBottom: 4,
      }}
    >
      <Typography variant="h2">Page non trouvée</Typography>
    </Stack>
  </ViewContainer>
)

export default NotFound
