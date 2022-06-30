/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import { socketEvents } from "@jitsi-box-pro/model"
import { JitsiMeeting } from "@jitsi/react-sdk"
import { useRef } from "react"
import IJitsiMeetExternalApi from "@jitsi/react-sdk/lib/types/IJitsiMeetExternalApi"
import { useSocketContext, useSocketListener } from "@/services/socket"
interface streamPayload {
  muted: boolean
}

const JitsiComponent = (): React.ReactElement => {
  const apiRef = useRef<IJitsiMeetExternalApi>()
  const { socket } = useSocketContext()
  const toggleAudio = () => {
    if (!apiRef.current) return
    apiRef.current.executeCommand("toggleAudio")
  }
  const toggleVideo = () => {
    if (!apiRef.current) return
    apiRef.current.executeCommand("toggleVideo")
  }

  useSocketListener(socketEvents.meeting.camera, toggleVideo)
  useSocketListener(socketEvents.meeting.mute, toggleAudio)

  const handleAudioStatusChange = (payload: streamPayload, feature: string) => {
    if (socket !== null) {
      socket.emit(socketEvents.meeting.mute, payload.muted)
    }
  }
  const handleVideoStatusChange = (payload: streamPayload, feature: string) => {
    if (socket !== null) {
      socket.emit(socketEvents.meeting.camera, payload.muted)
    }
  }
  const handleApiReady = (apiObj: IJitsiMeetExternalApi) => {
    console.log("api is ready")
    apiRef.current = apiObj
    apiRef.current.on("audioMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "audio")
    )
    apiRef.current.on("videoMuteStatusChanged", (payload) =>
      handleVideoStatusChange(payload, "video")
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
