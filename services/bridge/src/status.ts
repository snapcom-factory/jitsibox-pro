interface GlobalStatus {
  global : {
    page: "menu" | "joiningCall" | "creatingCall" | "localSharing" | "meeting";
  },
  keyboardMenu : {
    loading: boolean;
  },
  meeting : {
    meetingId: string;
    isMuted: boolean;
    isCameraOn: boolean;
    isHandRaised: boolean;
    isAskingToShareScreen: boolean;
    isSharingScreen: boolean;
  }
}

interface LocalStatus {
  mainScreenId: string;
  isControllerConnected: boolean;
  isMainScreenConnected: boolean;
}

export const globalStatus : GlobalStatus = {
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
  }
}

export const localStatus : LocalStatus = {
  mainScreenId: "",
  isControllerConnected: false,
  isMainScreenConnected: false,
}