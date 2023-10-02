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

// Проверка на наличие строки 'Safari' в user agent
if (navigator.userAgent.indexOf('Safari') != -1 ) {

console.log('This is Safari');
function playPause() {
  if (video.paused) {
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
  function playPauseButton() {
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
    } else {
      playButton.style.display = "block";
    }
  }
}
} else {

console.log('This is not Safari');
function playPause() {
  if (video.paused) {
    playButton.style.display = "block";
  } else {
    playButton.style.display = "none";
  }
}
function playPauseButton() {
  if (video.paused) {
    video.play();
    playButton.style.display = "block";
  } else {
    playButton.style.display = "none";
  }
}
}


playButton.addEventListener('click', playPauseButton);