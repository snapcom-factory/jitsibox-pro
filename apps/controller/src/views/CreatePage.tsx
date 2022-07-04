import { Stack, Typography } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import {
  Header,
  Footer,
  ReturnToMenuButton,
  TextInput,
  ViewContainer,
} from "@/components"
import { useSocketListener } from "@/services/socket"
import { useSnackbarContext } from "@/services/snackbar"

interface CreateProps {
  state: {
    isLoading: boolean
  } | undefined
}

const CreatePage = () => {
  const { state } = useLocation() as CreateProps
  const { isLoading } = state ?? { isLoading: false }

  const [loading, setLoading] = useState<boolean>(isLoading)

  const { openSnackbar } = useSnackbarContext()
  useSocketListener(socketEvents.createCall.error, () => {
    setLoading(false);
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
          loading={loading}
          setLoading={setLoading}
        />
      </Stack>
    </ViewContainer>
  )
}

export default CreatePage
