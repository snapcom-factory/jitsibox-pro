import { GlobalStatus } from "../../../packages/model/src"

const globalStatus: GlobalStatus = {
  global: {
    page: "menu",
  },
  keyboardMenu: {
    loading: false,
  },
  meeting: {
    meetingId: "",
    participants: 0,
    isMuted: false,
    isCameraOn: true,
    isHandRaised: false,
    isAskingToShareScreen: false,
    isSharingScreen: false,
  },
}

export default globalStatus
