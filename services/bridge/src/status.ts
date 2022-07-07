interface GlobalStatus {
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

const globalStatus: GlobalStatus = {
  global: {
    page: "menu",
  },
  keyboardMenu: {
    loading: false,
  },
  meeting: {
    meetingId: "",
    isMuted: false,
    isCameraOn: true,
    isHandRaised: false,
    isAskingToShareScreen: false,
    isSharingScreen: false,
  },
}

export default globalStatus
