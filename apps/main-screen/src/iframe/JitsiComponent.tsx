/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import { socketEvents } from "@jitsi-box-pro/model"
import { JitsiMeeting } from "@jitsi/react-sdk"
import { useRef } from "react"
import IJitsiMeetExternalApi from "@jitsi/react-sdk/lib/types/IJitsiMeetExternalApi"
import { useSocketContext, useSocketListener } from "@/services/socket"

interface audioVideoPayload {
  muted: boolean
}

interface handRaisedPayload {
  id: string
  handRaised: number
}

const JitsiComponent = (): React.ReactElement => {
  const apiRef = useRef<IJitsiMeetExternalApi>()
  const { socket } = useSocketContext()

  // commands
  const execute = (command: string) => {
    if (!apiRef.current) return
    apiRef.current.executeCommand(command)
  }
  // listening to events from bridge
  useSocketListener(socketEvents.meeting.camera, () => execute("toggleVideo"))
  useSocketListener(socketEvents.meeting.mute, () => execute("toggleAudio"))
  useSocketListener(socketEvents.meeting.wave, () => execute("toggleRaiseHand"))

  // sending events to bridge
  const handleAudioStatusChange = (payload: audioVideoPayload) => {
    if (socket !== null) {
      socket.emit(socketEvents.meeting.mute, payload.muted)
    }
  }
  const handleVideoStatusChange = (payload: audioVideoPayload) => {
    if (socket !== null) {
      socket.emit(socketEvents.meeting.camera, payload.muted)
    }
  }
  const handleHandUpdate = (payload: handRaisedPayload) => {
    if (socket !== null) {
      socket.emit(socketEvents.meeting.wave, payload.handRaised !== 0) // 0  means hand is lowered
    }
  }

  // listening to the events from the jitsi-meet-external-api
  const handleApiReady = (apiObj: IJitsiMeetExternalApi) => {
    apiRef.current = apiObj
    apiRef.current.on("audioMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload)
    )
    apiRef.current.on("videoMuteStatusChanged", (payload) =>
      handleVideoStatusChange(payload)
    )
    apiRef.current.on("raiseHandUpdated", (payload) =>
      handleHandUpdate(payload)
    )
  }

  return (
    <JitsiMeeting
      roomName="Test OPENFUN"
      interfaceConfigOverwrite={{
        MOBILE_APP_PROMO: false,
        filmStripOnly: false,
        SHOW_CHROME_EXTENSION_BANNER: false,
        DISPLAY_WELCOME_PAGE_CONTENT: false,
        TOOLBAR_ALWAYS_VISIBLE: true,
        TOOLBAR_BUTTONS: [
          "microphone",
          "camera",
          "videoquality",
          "fodeviceselection",
          "raisehand",
          "tileview",
        ],
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        SHOW_DEEP_LINKING_IMAGE: false,
      }}
      configOverwrite={{
        disableSimulcast: false,
        disableDeepLinking: true,
        prejoinPageEnabled: false,
        preferH264: true,
        startWithVideoMuted: false,
        startWithAudioMuted: true,
        enableWelcomePage: false,
      }}
      userInfo={{
        displayName: "YOUR_USERNAME",
        email: "",
      }}
      onApiReady={handleApiReady}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "100vh"
      }}
    />
  )
}

export default JitsiComponent
