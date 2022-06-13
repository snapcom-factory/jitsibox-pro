import { JitsiMeeting } from "@jitsi/react-sdk"
import { useRef } from "react"

const generateRoomName = () =>
  `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`

const JitsiComponent = () => {
  const apiRef = useRef()

  return (
    <JitsiMeeting
      roomName="TestOPENFUN"
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{
        displayName: "YOUR_USERNAME",
        email: "",
      }}
      onApiReady={(externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "90vh"
      }}
    />
  )
}

export default JitsiComponent
