import { Stack, Typography } from "@mui/material"
import { ViewContainer } from "@/components"

const CreatePage = () => (
  <ViewContainer>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={12}
      sx={{ height: "100%", paddingBottom: 10 }}
    >
      <Typography variant="h2">WEBCONFÉRENCE DE L&apos;ÉTAT</Typography>
      <Typography variant="body2">
        Veuillez choisir une action sur la tablette
      </Typography>
    </Stack>
  </ViewContainer>
)

export default CreatePage
