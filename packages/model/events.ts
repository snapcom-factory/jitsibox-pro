export const events = {
  global: {
    cancel: "back_to_menu",
  },
  menu: {
    join: "join_call",
    create: "create_call",
    share: "local_sharing",
  },
  joinCall: {
    validate: "validate_join_typing",
  },
  createCall: {
    validate: "validate_creation_typing",
  },
  localSharing: {
    start: "start_sharing",
    stop: "stop_sharing",
  },
  meeting: {
    mute: "mute_microphone",
    camera: "toggle_camera",
    wave: "raise_hand",
    leave: "leave_call",
    shareScreen: "share_screen",
    stopSharing: "stop_sharing",
  }
}