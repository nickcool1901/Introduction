const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

// Добавляем обработчик события 'loadedmetadata' для видео
video.addEventListener('loadedmetadata', function() {
    video.play();
});

// Если видео уже загружено, начнем его воспроизведение
if (video.readyState >= 2) {
    video.play();
}

function playPause() {
  if (video.paused) {
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
}

function playPauseButton() {
  if (video.paused) {
    video.style.visibility = "visible";
    video.play();
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
}

playButton.addEventListener('onclick', playPauseButton);