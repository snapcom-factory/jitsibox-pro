const socketEvents = {
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
  localSharing: {
    start: "startSharing",
    stop: "stopSharing",
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
}

const socket = io("ws://localhost:3001/mainScreen", {
  auth: {
    token: 'fakeAuthToken',
    roomName: "fakeRoomName"
  }
});

const currentPage = document.getElementById("current-page");
const isPlugged = document.getElementById("is-plugged");
const meetingId = document.getElementById("meeting-id");
const mute = document.getElementById("mute");
const camera = document.getElementById("camera");
const wave = document.getElementById("wave");
const askingToShare = document.getElementById("asking-to-share");
const sharing = document.getElementById("sharing");

// Setting up initial values
currentPage.innerHTML = "Menu";
isPlugged.innerHTML = "No";
meetingId.innerHTML = "";
mute.innerHTML = "No";
camera.innerHTML = "Yes";
wave.innerHTML = "No";
askingToShare.innerHTML = "No";
sharing.innerHTML = "No";


// Events

socket.on(socketEvents.global.cancel, () => {
  currentPage.innerHTML = "Menu";
  isPlugged.innerHTML = "No";
  socket.emit(socketEvents.global.cancel);
})

socket.on(socketEvents.menu.join, () => {
  currentPage.innerHTML = "Joining call";
  socket.emit(socketEvents.menu.join);
});

socket.on(socketEvents.menu.create, () => {
  currentPage.innerHTML = "Creating call";
  socket.emit(socketEvents.menu.create);
});

socket.on(socketEvents.menu.share, () => {
  currentPage.innerHTML = "Sharing screen";
  socket.emit(socketEvents.menu.share);
  setTimeout(() => {
    isPlugged.innerHTML = "Yes";
    socket.emit("localSharing.start");
  }, 3000);
});

socket.on(socketEvents.joinCall.validate, (meetingId, controllerId) => {
  if (meetingId === "error") {
    socket.emit(socketEvents.joinCall.error, controllerId, "Une erreur a été rencontrée");
  } else {
    currentPage.innerHTML = "Meeting";
    meetingId.innerHTML = meetingId;
    socket.emit(socketEvents.joinCall.validate, meetingId);
  }
});

socket.on(socketEvents.createCall.validate, (meetingId, controllerId) => {
  if (meetingId === "error") {
    socket.emit(socketEvents.createCall.error, controllerId, "Une erreur a été rencontrée");
  } else {
    currentPage.innerHTML = "Meeting";
    meetingId.innerHTML = meetingId;
    socket.emit(socketEvents.createCall.validate, meetingId);
  }
});

socket.on(socketEvents.meeting.mute, (isMuted) => {
  mute.innerHTML = isMuted ? "Yes" : "No";
  socket.emit(socketEvents.meeting.mute, isMuted);
});

socket.on(socketEvents.meeting.camera, (isCameraOn) => {
  camera.innerHTML = isCameraOn ? "Yes" : "No";
  socket.emit(socketEvents.meeting.camera, isCameraOn);
});

socket.on(socketEvents.meeting.wave, (isHandRaised) => {
  wave.innerHTML = isHandRaised ? "Yes" : "No";
  socket.emit(socketEvents.meeting.wave, isHandRaised);
});

socket.on(socketEvents.meeting.askingToShareScreen, () => {
  askingToShare.innerHTML = "Yes";
  setTimeout(() => {
    sharing.innerHTML = "Yes";
    askingToShare.innerHTML = "No";
    socket.emit(socketEvents.meeting.sharingScreen);
  }, 3000);
});

socket.on(socketEvents.meeting.stopSharing, () => {
  askingToShare.innerHTML = "No";
  sharing.innerHTML = "No";
  socket.emit(socketEvents.meeting.stopSharing);
})

socket.on(socketEvents.meeting.leave, () => {
  currentPage.innerHTML = "Menu";
  meetingId.innerHTML = "";
  mute.innerHTML = "No";
  camera.innerHTML = "Yes";
  wave.innerHTML = "No";
  askingToShare.innerHTML = "No";
  sharing.innerHTML = "No";
  socket.emit(socketEvents.meeting.leave);
});