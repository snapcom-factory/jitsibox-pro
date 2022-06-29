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
  useSocketListener(socketEvents.createCall.error, (error: string) => {
    console.error(error)
    openSnackbar(
      "error",
      { vertical: "top", horizontal: "center" },
      "Nom de réunion non valide"
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
          Pour créer une réunion, saississez un nom...
        </Typography>
        <TextInput
          placeholder="Saisissez un nom de réunion..."
          eventName={socketEvents.createCall.validate}
        />
      </Stack>
    </ViewContainer>
  )
}

export default CreatePage
