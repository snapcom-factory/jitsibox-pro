import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Grid } from "@mui/material"
import {
  CancelPresentation,
  Mic,
  MicOff,
  PresentToAll,
  Videocam,
  VideocamOff,
} from "@mui/icons-material"
import { socketEvents } from "@/model"
import { ActionButton } from "@/components"
import { useSocketListener } from "@/services/socket"
import WaveHand from "@/assets/WaveHand"
import WavingHand from "@/assets/WavingHand"
import DisplayChat from "@/assets/DisplayChat"
import HideChat from "@/assets/HideChat"
import { useSnackbarContext } from "@/services/snackbar"
import { Location, MeetingState } from "@/services/navigate"

const MeetingMainControls = (): React.ReactElement => {
  const { state } = useLocation() as Location<MeetingState>
  const {
    isAlreadyMuted,
    isCameraAlreadyOn,
    isHandAlreadyRaised,
    isChatAlreadyDisplayed,
    isAlreadyAskingToShareScreen,
  } = state ?? {
    isAlreadyMuted: false,
    isCameraAlreadyOn: true,
    isHandAlreadyRaised: false,
    isChatAlreadyDisplayed: false,
    isAlreadyAskingToShareScreen: false,
  }

  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true)
  const [isHandRaised, setIsHandRaised] = useState<boolean>(false)
  const [isChat, setIsChatDisplayed] = useState<boolean>(false)
  const [isAskingToShareScreen, setIsAskingToShareScreen] =
    useState<boolean>(false)

  useEffect(() => {
    setIsMuted(isAlreadyMuted)
    setIsCameraOn(isCameraAlreadyOn)
    setIsHandRaised(isHandAlreadyRaised)
    setIsChatDisplayed(isChatAlreadyDisplayed)
    setIsAskingToShareScreen(isAlreadyAskingToShareScreen)
  }, [state])

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
  useSocketListener(socketEvents.meeting.chat, (userHasChatDisplayed: boolean) => {
    setIsChatDisplayed(userHasChatDisplayed)
  })
  useSocketListener(socketEvents.meeting.askingToShareScreen, () => {
    setIsAskingToShareScreen(true)
    openSnackbar(
      "info",
      { vertical: "bottom", horizontal: "center" },
      "Pour partager votre écran dans le meeting, brancher le câble HDMI à votre ordinateur.",
      5000
    )
  })
  useSocketListener(socketEvents.meeting.stopSharing, () => {
    setIsAskingToShareScreen(false)
    openSnackbar(
      "error",
      { vertical: "bottom", horizontal: "center" },
      "Partage d'écran arrêté",
      2000
    )
  })
  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ paddingBottom: 4 }}
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
        {!isChat ? (
          <ActionButton
            text="Afficher le Chat"
            color="primary"
            Icon={DisplayChat}
            event={{ name: socketEvents.meeting.chat, payload: true }}
          />
        ) : (
          <ActionButton
            text="Supprimer le Chat"
            color="primary"
            Icon={HideChat}
            event={{ name: socketEvents.meeting.chat, payload: false }}
          />
        )}
      </Grid>

      {/* <Grid item xs={3}>
        {!isAskingToShareScreen ? (
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
      </Grid> */}
    </Grid>
  )
}

export default MeetingMainControls
