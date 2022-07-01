import { useState } from "react"
import { Grid } from "@mui/material"
import {
  CancelPresentation,
  Mic,
  MicOff,
  PresentToAll,
  Videocam,
  VideocamOff,
} from "@mui/icons-material"
import { socketEvents } from "@jitsi-box-pro/model"
import { ActionButton } from "@/components"
import { useSocketListener } from "@/services/socket"
import WaveHand from "@/assets/WaveHand"
import WavingHand from "@/assets/WavingHand"
import { useSnackbarContext } from "@/services/snackbar"

const MeetingMainControls = (): React.ReactElement => {
  const [isMuted, setIsMuted] = useState(false)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [isAskingtoShareScreen, setIsAskingtoShareScreen] = useState(false)
  const { openSnackbar } = useSnackbarContext()

  useSocketListener(socketEvents.meeting.mute, (userIsMuted: boolean) => {
    setIsMuted(userIsMuted)
  })
  useSocketListener(socketEvents.meeting.camera, (userHasCameraOn: boolean) => {
    setIsCameraOn(userHasCameraOn)
  })
  useSocketListener(socketEvents.meeting.wave, (userHasHandRaised: boolean) => {
    setIsHandRaised(userHasHandRaised)
  })
  useSocketListener(socketEvents.meeting.askingToShareScreen, () => {
    setIsAskingtoShareScreen(true)
    openSnackbar(
      "info",
      { vertical: "bottom", horizontal: "center" },
      "Pour partager votre écran dans le meeting, brancher le cable HDMI à votre ordinateur."
    )
  })
  useSocketListener(socketEvents.meeting.sharingScreen, () => {
    openSnackbar(
      "success",
      { vertical: "bottom", horizontal: "center" },
      "Écran partagé",
      5000
    )
  })
  useSocketListener(socketEvents.meeting.stopSharing, () => {
    setIsAskingtoShareScreen(false)
  })
  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ paddingBottom: 6 }}
    >
      <Grid item xs={3}>
        {!isMuted ? (
          <ActionButton
            text="Couper le micro"
            color="primary"
            Icon={Mic}
            event={{ name: socketEvents.meeting.mute, payload: true }}
          />
        ) : (
          <ActionButton
            text="Allumer le micro"
            color="primary"
            Icon={MicOff}
            event={{ name: socketEvents.meeting.mute, payload: false }}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        {isCameraOn ? (
          <ActionButton
            text="Couper la caméra"
            color="primary"
            Icon={Videocam}
            event={{ name: socketEvents.meeting.camera, payload: false }}
          />
        ) : (
          <ActionButton
            text="Allumer la caméra"
            color="primary"
            Icon={VideocamOff}
            event={{ name: socketEvents.meeting.camera, payload: true }}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        {!isHandRaised ? (
          <ActionButton
            text="Lever la main"
            color="primary"
            Icon={WaveHand}
            event={{ name: socketEvents.meeting.wave, payload: true }}
          />
        ) : (
          <ActionButton
            text="Baisser la main"
            color="primary"
            Icon={WavingHand}
            event={{ name: socketEvents.meeting.wave, payload: false }}
          />
        )}
      </Grid>
      <Grid item xs={3}>
        {!isAskingtoShareScreen ? (
          <ActionButton
            text="Partager l'écran"
            color="primary"
            Icon={PresentToAll}
            event={{ name: socketEvents.meeting.askingToShareScreen }}
          />
        ) : (
          <ActionButton
            text="Arrêter le partage"
            color="primary"
            Icon={CancelPresentation}
            event={{ name: socketEvents.meeting.stopSharing }}
          />
        )}
      </Grid>
    </Grid>
  )
}

export default MeetingMainControls
