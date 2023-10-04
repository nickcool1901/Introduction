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

function playPause() {
  if (navigator.userAgent.indexOf('AppleWebKit') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    if (video.paused) {
      playButton.style.display = "block";
    } else {
      playButton.style.display = "none";
    }
}else{
  if (video.paused) {
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
  }
}

function playPauseButton() {
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
    } else {
      playButton.style.display = "none";
    }
  }else{
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
    } else {
      playButton.style.display = "none";
    }
  }
}
playButton.addEventListener('click', playPauseButton);