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
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  // Этот браузер является Safari
  console.log('This is Safari');
  
function playPause() {
  if (video.paused) {
    playButton.style.display = "block";
  } else {
    playButton.style.display = "none";
  }
}
} else {
  // Этот браузер не является Safari
  console.log('This is not Safari');
  
function playPause() {
  if (video.paused) {
    playButton.style.display = "none";
  } else {
    playButton.style.display = "block";
  }
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