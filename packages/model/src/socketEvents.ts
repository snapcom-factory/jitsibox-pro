export const socketEvents = {
  global: {
    cancel: "backToMenu",
    connectionData: "connectionData",
  },
  menu: {
    join: "joinCall",
    create: "createCall",
    share: "localSharing",
  },
  joinCall: {
    validate: "validateJoinTyping",
    error: "validationFailed",
  },
  createCall: {
    validate: "validateCreationTyping",
    error: "validationFailed",
  },
  meeting: {
    mute: "muteMicrophone",
    camera: "toggleCamera",
    wave: "raiseHand",
    leave: "leaveCall",
    askingToShareScreen: "askingToShareScreen",
    sharingScreen: "shareScreen",
    stopSharing: "stopSharing",
  },
} as const

export interface GlobalStatus {
  global: {
    page: "menu" | "joiningCall" | "creatingCall" | "localSharing" | "meeting"
  }
  keyboardMenu: {
    loading: boolean
  }
  meeting: {
    meetingId: string
    isMuted: boolean
    isCameraOn: boolean
    isHandRaised: boolean
    isAskingToShareScreen: boolean
    isSharingScreen: boolean
  }
}

export interface ControllerToServerEvents {
  [socketEvents.global.cancel]: () => void
  [socketEvents.menu.join]: () => void
  [socketEvents.menu.create]: () => void
  [socketEvents.menu.share]: () => void
  [socketEvents.joinCall.validate]: (meetingId: string) => void
  [socketEvents.createCall.validate]: (meetingId: string) => void
  [socketEvents.meeting.mute]: (isMuted: boolean) => void
  [socketEvents.meeting.camera]: (isCameraOn: boolean) => void
  [socketEvents.meeting.wave]: (isHandRaised: boolean) => void
  [socketEvents.meeting.askingToShareScreen]: () => void
  [socketEvents.meeting.stopSharing]: () => void
  [socketEvents.meeting.leave]: () => void
}

export interface ServerToControllerEvents {
  [socketEvents.global.cancel]: () => void
  [socketEvents.global.connectionData]: (globalStatus: GlobalStatus) => void
  [socketEvents.menu.join]: () => void
  [socketEvents.menu.create]: () => void
  [socketEvents.menu.share]: () => void
  [socketEvents.joinCall.validate]: (props: {
    meetingId: string
    defaultParams: {
      audioMuted: boolean
      videoMuted: boolean
    }
  }) => void
  [socketEvents.joinCall.error]: (error: string) => void
  [socketEvents.createCall.validate]: (props: {
    meetingId: string
    defaultParams: {
      audioMuted: boolean
      videoMuted: boolean
    }
  }) => void
  [socketEvents.createCall.error]: (error: string) => void
  [socketEvents.meeting.mute]: (isMuted: boolean) => void
  [socketEvents.meeting.camera]: (isCameraOn: boolean) => void
  [socketEvents.meeting.wave]: (isHandRaised: boolean) => void
  [socketEvents.meeting.askingToShareScreen]: () => void
  [socketEvents.meeting.sharingScreen]: () => void
  [socketEvents.meeting.stopSharing]: () => void
  [socketEvents.meeting.leave]: () => void
}

export interface ServerToMainScreenEvents {
  [socketEvents.global.cancel]: () => void
  [socketEvents.global.connectionData]: (globalStatus: GlobalStatus) => void
  [socketEvents.menu.join]: () => void
  [socketEvents.menu.create]: () => void
  [socketEvents.menu.share]: () => void
  [socketEvents.joinCall.validate]: (
    meetingId: string,
    controllerId: string
  ) => void
  [socketEvents.createCall.validate]: (
    meetingId: string,
    controllerId: string
  ) => void
  [socketEvents.meeting.mute]: (isMuted: boolean) => void
  [socketEvents.meeting.camera]: (isCameraOn: boolean) => void
  [socketEvents.meeting.wave]: (isHandRaised: boolean) => void
  [socketEvents.meeting.askingToShareScreen]: () => void
  [socketEvents.meeting.stopSharing]: () => void
  [socketEvents.meeting.leave]: () => void
}

export interface MainScreenToServerEvents {
  [socketEvents.joinCall.validate]: (value : {
    meetingId: string,
    defaultParams: {
      audioMuted: boolean
      videoMuted: boolean
    }
  }) => void
  [socketEvents.joinCall.error]: (error: string, controllerId: string) => void
  [socketEvents.createCall.validate]: (value : {
    meetingId: string,
    defaultParams: {
      audioMuted: boolean
      videoMuted: boolean
    }
  }) => void
  [socketEvents.createCall.error]: (error: string, controllerId: string) => void
  [socketEvents.meeting.mute]: (isMuted: boolean) => void
  [socketEvents.meeting.camera]: (isCameraOn: boolean) => void
  [socketEvents.meeting.wave]: (isHandRaised: boolean) => void
  [socketEvents.meeting.sharingScreen]: () => void
  [socketEvents.meeting.stopSharing]: () => void
  [socketEvents.meeting.leave]: () => void
}

export type ServerToClientEvents =
  | ServerToControllerEvents
  | ServerToMainScreenEvents
export type ClientToServerEvents =
  | ControllerToServerEvents
  | MainScreenToServerEvents
