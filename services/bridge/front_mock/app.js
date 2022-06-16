const socket = io({
  auth: {
    token: 'let me in',
    name: 'controller',
    roomName: "Ministère de l'écologie"
  }
});

const muteButton = document.getElementById('mute');
const cameraButton = document.getElementById('camera');
const raiseHandButton = document.getElementById('raise-hand');
const shareScreenButton = document.getElementById('share-screen');
const leaveCallButton = document.getElementById('leave-call');

const muteValue = document.getElementById('mute-value');
const cameraValue = document.getElementById('camera-value');
const raiseHandValue = document.getElementById('raise-hand-value');
const shareScreenValue = document.getElementById('share-screen-value');
const leaveCallValue = document.getElementById('leave-call-value');

muteButton.addEventListener('click', function() {
  socket.emit('mute', muteValue.innerHTML);
});

cameraButton.addEventListener('click', function() {
  socket.emit('camera', cameraValue.innerHTML);
});

raiseHandButton.addEventListener('click', function() {
  socket.emit('raise-hand', raiseHandValue.innerHTML);
});

shareScreenButton.addEventListener('click', function() {
  socket.emit('share-screen', shareScreenValue.innerHTML);
});

leaveCallButton.addEventListener('click', function() {
  socket.emit('leave-call', leaveCallValue.innerHTML);
});

socket.on('change-mute', (msg) => {
  muteValue.innerHTML = msg;
});

socket.on('change-camera', (msg) => {
  cameraValue.innerHTML = msg;
});

socket.on('change-raise-hand', (msg) => {
  raiseHandValue.innerHTML = msg;
});

socket.on('change-share-screen', (msg) => {
  shareScreenValue.innerHTML = msg;
});

socket.on('change-leave-call', (msg) => {
  leaveCallValue.innerHTML = msg;
});