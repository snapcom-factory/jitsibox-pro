interface GlobalStatus {
  global : {
    page: "menu" | "joiningCall" | "creatingCall" | "localSharing" | "meeting";
  },
  localSharing : {
    isPlugged: boolean;
  },
  keyboardMenu : {
    fullKeyboard: boolean;
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
  localSharing: {
    isPlugged: false,
  },
  keyboardMenu: {
    fullKeyboard: false,
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