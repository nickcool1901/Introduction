const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

// Add event for video
video.addEventListener('loadedmetadata', function() {
    video.play();
});

// If video is loaded, it starts
if (video.readyState >= 2) {
    video.play();
}

// Check for 'Safari' in user agent
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
console.log('This is Safari');
function playPause() {
  if (video.paused) {
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
}
  function playPauseButton() {
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
    } else {
      playButton.style.display = "none";
    }
  }
}
else {
console.log('This is not Safari'); // works also with safari and i can't solve it
function playPause() {
  if (video.paused) {
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
}
function playPauseButton() {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    playButton.style.display = "none";
  }
}
}
playButton.addEventListener('click', playPauseButton);