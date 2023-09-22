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
    video.play();
    playButton.style.display = "none";
  } else if (video.play){
    // video.pause(); I tested and don't need
    playButton.style.display = "block";
    video.style.visibility = "hidden";
  }
}

function playPauseButton() {
if (video.paused) {
    video.play();
    playButton.style.display = "none";
    video.style.visibility = "visible";
} else if (video.play){
    // video.pause(); I tested and don't need
    playButton.style.display = "block";
}
}

// Добавляем обработчик события клика на кнопку
playButton.addEventListener('click', playPauseButton);