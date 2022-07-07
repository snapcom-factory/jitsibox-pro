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

const MeetingPage = (): React.ReactElement => {
  const apiRef = useRef<IJitsiMeetExternalApi>()
  const { socket } = useSocketContext()
  const id = "1234"
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
      socket.emit(socketEvents.meeting.camera, !payload.muted)
    }
  }
  const handleHandUpdate = (payload: handRaisedPayload) => {
    if (socket !== null && payload.id === id) {
      socket.emit(socketEvents.meeting.wave, payload.handRaised !== 0) // 0  means hand is lowered
    }
  }

  // listening to the events from the jitsi-meet-external-api
  const handleApiReady = (apiObj: IJitsiMeetExternalApi) => {
    apiRef.current = apiObj
    apiRef.current.on("audioMuteStatusChanged", (payload: audioVideoPayload) =>
      handleAudioStatusChange(payload)
    )
    apiRef.current.on("videoMuteStatusChanged", (payload: audioVideoPayload) =>
      handleVideoStatusChange(payload)
    )
    apiRef.current.on("raiseHandUpdated", (payload: handRaisedPayload) =>
      handleHandUpdate(payload)
    )
  }
  console.log(import.meta.env.VITE_DOMAIN)

  return (
    <JitsiMeeting
      domain={import.meta.env.VITE_DOMAIN}
      jwt={import.meta.env.VITE_WEBCONF_TOKEN}
      roomName="ROOMSNAPCOM1234"
      configOverwrite={{
        disableSimulcast: false,
        disableDeepLinking: true,
        prejoinPageEnabled: false,
        preferH264: true,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
        enableWelcomePage: false,
        toolbarButtons: [],
        notifications: [],
        conferenceInfo: {
          alwaysVisible: [],
          autoHide: [],
        },
      }}
      userInfo={{
        displayName: "Participant 1",
        email: "",
      }}
      onApiReady={handleApiReady}
      getIFrameRef={(iframeRef: HTMLDivElement) => {
        iframeRef.style.height = "100vh"
      }}
    />
  )
}

export default MeetingPage
