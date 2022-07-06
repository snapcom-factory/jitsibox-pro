import { Stack, Typography } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { ViewContainer } from "@/components"
import { useSocketListener } from "@/services/socket"

const JoinPage = () => {
  useSocketListener(socketEvents.joinCall.validate, (meetingName: string) => {
    console.log("join call", meetingName)
  })

  return (
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
}

export default JoinPage
