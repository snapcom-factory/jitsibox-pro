import { Stack, Typography } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  Header,
  Footer,
  ReturnToMenuButton,
  TextInput,
  ViewContainer,
} from "@/components"
import { useSocketListener } from "@/services/socket"
import { useSnackbarContext } from "@/services/snackbar"

interface JoinProps {
  state: {
    isLoading: boolean
  } | undefined
}

const JoinPage = () => {
  const { state } = useLocation() as JoinProps

  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => setLoading(state?.isLoading ?? false), [state])

  const { openSnackbar } = useSnackbarContext()
  useSocketListener(socketEvents.joinCall.error, () => {
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
          Pour rejoindre une réunion en cours,
          <br /> entrer le nom du meeting ou le code réunion à 10 chiffres
        </Typography>
        <TextInput
          placeholder="Saisir le nom ou le code du meeting..."
          eventName={socketEvents.joinCall.validate}
          loading={loading}
          setLoading={setLoading}
        />
      </Stack>
    </ViewContainer>
  )
}

export default JoinPage
