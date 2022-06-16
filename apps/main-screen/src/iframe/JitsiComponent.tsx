import { JitsiMeeting } from "@jitsi/react-sdk"
import { useEffect, useRef, useState } from "react"

const generateRoomName = () =>
  `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`

const JitsiComponent = () => {
  const apiRef = useRef<any>()

  useEffect(() => {
    window.addEventListener("mute", function (e) {
      if (!apiRef.current) return
      apiRef.current.executeCommand("toggleAudio")
    })
  })

  const handleApiReady = (apiObj: any) => {
    console.log("api is ready")
    apiRef.current = apiObj
  }

  const toggleAudio = () => {
    if (!apiRef.current) return
    apiRef.current.executeCommand("toggleAudio")
  }
  return (
    <>
      <button onClick={toggleAudio}>MUTE</button>
      <JitsiMeeting
        roomName="Test zerazer OPENFUN"
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
    </>
  )
}

export default JitsiComponent
