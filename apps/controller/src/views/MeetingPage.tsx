import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  ButtonBase,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import {
  CallEnd,
  Person,
  Mic,
  Videocam,
  PresentToAll,
  QrCode,
  VideocamOff,
  MicOff,
  CancelPresentation,
} from "@mui/icons-material"
import { socketEvents } from "@jitsi-box-pro/model"
import WaveHand from "@/assets/WaveHand"
import WavingHand from "@/assets/WavingHand"
import { ViewContainer, MeetingButton, Header, Footer } from "@/components"
import { useSocketListener } from "@/services/socket"

const QRCodeButton = () => (
  <ButtonBase sx={{ borderRadius: 20 }}>
    <Chip
      label="webconf.numerique.gouv.fr/tuweruywe345"
      color="primary"
      variant="outlined"
      sx={{
        height: 30,
        paddingLeft: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
    />
    <Chip
      color="primary"
      sx={{
        height: 30,
        paddingLeft: 1,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }}
      icon={<QrCode />}
    />
  </ButtonBase>
)

const MeetingMainControls = (): React.ReactElement => {
  const [isMuted, setIsMuted] = useState(false)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [isSharingScreen, setIsSharingScreen] = useState(false)

  useSocketListener(socketEvents.meeting.mute, (userIsMuted: boolean) => {
    setIsMuted(userIsMuted)
  })
  useSocketListener(socketEvents.meeting.camera, (userHasCameraOn: boolean) => {
    setIsCameraOn(userHasCameraOn)
  })
  useSocketListener(socketEvents.meeting.wave, (userHasHandRaised: boolean) => {
    setIsHandRaised(userHasHandRaised)
  })
  useSocketListener(socketEvents.meeting.sharingScreen, () => {
    setIsSharingScreen(true)
  })
  useSocketListener(socketEvents.meeting.stopSharing, () => {
    setIsSharingScreen(false)
  })
  return (
    <Grid container spacing={0} justifyContent="center" alignItems="center">
      <Grid item xs={3}>
        <MeetingButton
          color="primary"
          Icon={Mic}
          event={{ name: socketEvents.meeting.mute, payload: true }}
          render={!isMuted}
        />
        <MeetingButton
          color="primary"
          Icon={MicOff}
          event={{ name: socketEvents.meeting.mute, payload: false }}
          render={isMuted}
        />
      </Grid>
      <Grid item xs={3}>
        <MeetingButton
          color="primary"
          Icon={Videocam}
          event={{ name: socketEvents.meeting.camera, payload: false }}
          render={isCameraOn}
        />
        <MeetingButton
          color="primary"
          Icon={VideocamOff}
          event={{ name: socketEvents.meeting.camera, payload: true }}
          render={!isCameraOn}
        />
      </Grid>
      <Grid item xs={3}>
        <MeetingButton
          color="primary"
          Icon={WaveHand}
          event={{ name: socketEvents.meeting.wave, payload: true }}
          render={!isHandRaised}
        />
        <MeetingButton
          color="primary"
          Icon={WavingHand}
          event={{ name: socketEvents.meeting.mute, payload: false }}
          render={isHandRaised}
        />
      </Grid>
      <Grid item xs={3}>
        <MeetingButton
          color="primary"
          Icon={PresentToAll}
          event={{ name: socketEvents.meeting.sharingScreen }}
          render={!isSharingScreen}
        />
        <MeetingButton
          color="primary"
          Icon={CancelPresentation}
          event={{ name: socketEvents.meeting.stopSharing }}
          render={isSharingScreen}
        />
      </Grid>
    </Grid>
  )
}

const MeetingPage = () => {
  const { meetingId } = useParams()
  const navigate = useNavigate()
  useSocketListener(socketEvents.meeting.leave, () => {
    navigate("/")
  })

  return (
    <ViewContainer
      header={
        <Header
          middleContent={<QRCodeButton />}
          endContent={<Chip icon={<Person />} label="12" color="primary" />}
        />
      }
      footer={<Footer />}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ paddingBottom: 10 }}
        >
          <Typography variant="h5">Identifiant de la réunion</Typography>
          <Typography variant="h3">{meetingId}</Typography>
        </Stack>
        <MeetingMainControls />
        <MeetingButton
          color="secondary"
          Icon={CallEnd}
          event={{ name: socketEvents.meeting.leave }}
          render
        />
      </Container>
    </ViewContainer>
  )
}
export default MeetingPage
