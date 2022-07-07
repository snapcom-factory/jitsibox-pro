import { Stack, Typography } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import {
  Header,
  Footer,
  ReturnToMenuButton,
  TextInput,
  ViewContainer,
} from "@/components"
import { useSocketListener } from "@/services/socket"
import { useSnackbarContext } from "@/services/snackbar"

const CreatePage = () => {
  const { openSnackbar } = useSnackbarContext()
  useSocketListener(socketEvents.createCall.error, () => {
    openSnackbar(
      "error",
      { vertical: "top", horizontal: "center" },
      "Nom de réunion invalide",
      3000
    )
  })

  return (
    <ViewContainer
      header={<Header endContent={<ReturnToMenuButton />} />}
      footer={<Footer />}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Typography variant="body1" align="center">
          Pour créer une réunion, entrer un nom
        </Typography>
        <TextInput
          placeholder="Saisir un nom de réunion..."
          eventName={socketEvents.createCall.validate}
          creating
        />
      </Stack>
    </ViewContainer>
  )
}

export default CreatePage
