const socket = io({
  auth: {
    token: 'let me in',
    roomName: "Ministère de l'écologie"
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

socket.on("global.cancel", () => {
  currentPage.innerHTML = "Menu";
  isPlugged.innerHTML = "No";
  socket.emit("global.cancel");
})

socket.on("menu.join", () => {
  currentPage.innerHTML = "Joining call";
  socket.emit("menu.join");
});

socket.on("menu.create", () => {
  currentPage.innerHTML = "Creating call";
  socket.emit("menu.create");
});

socket.on("menu.share", () => {
  currentPage.innerHTML = "Sharing screen";
  socket.emit("menu.share");
  setTimeout(() => {
    isPlugged.innerHTML = "Yes";
    socket.emit("localSharing.start");
  }, 3000);
});

socket.on("joinCall.validate", (meetingId, controllerId) => {
  if (meetingId === "error") {
    socket.emit("joinCall.error", controllerId, "Une erreur a été rencontrée");
  } else {
    currentPage.innerHTML = "Meeting";
    meetingId.innerHTML = meetingId;
    socket.emit("joinCall.validate", meetingId);
  }
});

socket.on("creatingCall.validate", (meetingId, controllerId) => {
  if (meetingId === "error") {
    socket.emit("creating.error", controllerId, "Une erreur a été rencontrée");
  } else {
    currentPage.innerHTML = "Meeting";
    meetingId.innerHTML = meetingId;
    socket.emit("creating.validate", meetingId);
  }
});

socket.on("meeting.mute", (isMuted) => {
  mute.innerHTML = isMuted ? "Yes" : "No";
  socket.emit("meeting.mute", isMuted);
});

socket.on("meeting.camera", (isCameraOn) => {
  camera.innerHTML = isCameraOn ? "Yes" : "No";
  socket.emit("meeting.camera", isCameraOn);
});

socket.on("meeting.wave", (isHandRaised) => {
  wave.innerHTML = isHandRaised ? "Yes" : "No";
  socket.emit("meeting.wave", isHandRaised);
});

socket.on("meeting.askingToShareScreen", () => {
  askingToShare.innerHTML = "Yes";
  setTimeout(() => {
    sharing.innerHTML = "Yes";
    askingToShare.innerHTML = "No";
    socket.emit("meeting.sharingScreen");
  }, 3000);
});

socket.on("meeting.stopSharing", () => {
  askingToShare.innerHTML = "No";
  sharing.innerHTML = "No";
  socket.emit("meeting.stopSharing");
})

socket.on("meeting.leave", () => {
  currentPage.innerHTML = "Menu";
  meetingId.innerHTML = "";
  mute.innerHTML = "No";
  camera.innerHTML = "Yes";
  wave.innerHTML = "No";
  askingToShare.innerHTML = "No";
  sharing.innerHTML = "No";
  socket.emit("meeting.leave");
});