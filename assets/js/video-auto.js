const video = document.getElementById('myVideo');

// Добавляем обработчик события 'loadedmetadata' для видео
video.addEventListener('loadedmetadata', function() {
    // Как только видео загрузится, начинаем его воспроизведение
    video.play();
});

// Если видео уже загружено, начнем его воспроизведение
if (video.readyState >= 2) {
    video.play();
}