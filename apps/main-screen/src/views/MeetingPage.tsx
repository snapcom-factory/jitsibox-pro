/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import { useParams, useNavigate, useLocation } from "react-router-dom"
import { JitsiMeeting } from "@jitsi/react-sdk"
import { useRef } from "react"
import IJitsiMeetExternalApi from "@jitsi/react-sdk/lib/types/IJitsiMeetExternalApi"
import { socketEvents } from "@/model"

import { useSocketContext, useSocketListener } from "@/services/socket"
import {
  getCameraDevice,
  getInputMicDevice,
  getOutputSpeakerDevice,
} from "@/services/mediaDevices"

interface audioVideoPayload {
  muted: boolean
}

interface handRaisedPayload {
  id: string
  handRaised: number
}

interface MeetingProps {
  state:
    | {
        isAlreadyMuted: boolean
        isVideoAlreadyMuted: boolean
        isHandAlreadyRaised: boolean
        isAlreadyAskingToShareScreen: boolean
      }
    | undefined
}

const defaultParams = {
  audioMuted: false,
  videoMuted: false,
}

const nameToDisplay = "ROOM_2312"

const MeetingPage = (): React.ReactElement => {
  const meetingParam = useParams<string>()
  const meetingId = meetingParam.meetingId ?? "default"
  const navigate = useNavigate()

  let participantId = ""

  if (meetingId === undefined || meetingId.length === 0) navigate("/")

  const { state } = useLocation() as MeetingProps
  const { isAlreadyMuted, isVideoAlreadyMuted, isHandAlreadyRaised } =
    state ?? {
      isAlreadyMuted: defaultParams.audioMuted,
      isCameraAlreadyOn: defaultParams.videoMuted,
      isHandAlreadyRaised: false,
    }

  const apiRef = useRef<IJitsiMeetExternalApi>()
  const { socket } = useSocketContext()
  // commands
  const execute = (command: string) => {
    if (!apiRef.current) return
    apiRef.current.executeCommand(command)
  }
  // listening to events from bridge
  useSocketListener(socketEvents.meeting.leave, () => {
    execute("hangup")
    navigate("/")
    if (socket !== null) {
      socket.emit(socketEvents.meeting.leave)
    }
  })
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
    if (socket !== null && payload.id === participantId) {
      socket.emit(socketEvents.meeting.wave, payload.handRaised !== 0) // 0  means hand is lowered
    }
  }

  const handleParticipantChange = () => {
    if (!apiRef.current) return
    const numberOfParticipants = apiRef.current.getNumberOfParticipants()
    if (socket !== null) {
      socket.emit(socketEvents.meeting.participants, numberOfParticipants)
    }
  }

  // listening to the events from the jitsi-meet-external-api
  const handleApiReady = (apiObj: IJitsiMeetExternalApi) => {
    apiRef.current = apiObj

    // Warn the controller that the API is ready
    apiRef.current.on(
      "videoConferenceJoined",
      async ({ id }: { id: string }) => {
        if (!apiRef.current) return
        const numberOfParticipants = apiRef.current.getNumberOfParticipants()
        participantId = id
        if (socket !== null) {
          socket.emit(socketEvents.joinCall.validate, {
            meetingId,
            numberOfParticipants,
            defaultParams,
          })
          socket.emit(socketEvents.createCall.validate, {
            meetingId,
            numberOfParticipants,
            defaultParams,
          })
        }
        const cameraDevice = await getCameraDevice()
        if (cameraDevice !== undefined) {
          apiRef.current.setVideoInputDevice(
            cameraDevice.label,
            cameraDevice.deviceId
          )
        }
        const micDevice = await getInputMicDevice()
        if (micDevice !== undefined) {
          apiRef.current.setAudioInputDevice(
            micDevice.label,
            micDevice.deviceId
          )
        }
        const speakerDevice = await getOutputSpeakerDevice()
        if (speakerDevice !== undefined) {
          apiRef.current.setAudioOutputDevice(
            speakerDevice.label,
            speakerDevice.deviceId
          )
        }
        if (isHandAlreadyRaised) {
          apiRef.current.executeCommand("toggleRaiseHand")
        }
      }
    )

    apiRef.current.on("audioMuteStatusChanged", (payload: audioVideoPayload) =>
      handleAudioStatusChange(payload)
    )
    apiRef.current.on(
      "videoMuteStatusChanged",
      (payload: audioVideoPayload) => {
        handleVideoStatusChange(payload)
      }
    )
    apiRef.current.on("raiseHandUpdated", (payload: handRaisedPayload) =>
      handleHandUpdate(payload)
    )

    apiRef.current.on("participantJoined", () => handleParticipantChange())
    apiRef.current.on("participantKickedOut", () => handleParticipantChange())
    apiRef.current.on("participantLeft", () => handleParticipantChange())
  }

  return (
    <JitsiMeeting
      domain={import.meta.env.VITE_DOMAIN}
      jwt={import.meta.env.VITE_WEBCONF_TOKEN}
      roomName={meetingId}
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
        startWithVideoMuted: isVideoAlreadyMuted,
        startWithAudioMuted: isAlreadyMuted,
        enableWelcomePage: false,
        toolbarButtons: [],
        notifications: [],
        conferenceInfo: {
          alwaysVisible: [],
          autoHide: [],
        },
      }}
      userInfo={{
        displayName: nameToDisplay,
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
