import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Close } from "@mui/icons-material"
import { socketEvents } from "@/model"
import { ActionButton, Footer, Header, ViewContainer } from "@/components"

const NotFound = () => (
  <ViewContainer header={<Header />} footer={<Footer />}>
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
      <ActionButton
        color="secondary"
        text="Retourner au menu"
        Icon={Close}
        event={{ name: socketEvents.global.cancel }}
      />
    </Stack>
  </ViewContainer>
)

export default NotFound
