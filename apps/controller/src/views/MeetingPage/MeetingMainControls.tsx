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
import { MeetingButton } from "@/components"
import { useSocketListener } from "@/services/socket"
import WaveHand from "@/assets/WaveHand"
import WavingHand from "@/assets/WavingHand"

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

export default MeetingMainControls
