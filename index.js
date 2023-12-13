document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playbackBar = document.querySelector('.progress-bar');
    const currTime = document.querySelector('.curr-time');
    const totTime = document.querySelector('.tot-time');
    const albumTitle = document.querySelector('.album-title');
    const albumInfo = document.querySelector('.album-info');
    const albumImg = document.querySelector('.album img');

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            // Set the audio source to the clicked card's data-src
            audioPlayer.src = this.getAttribute('data-src');

            audioPlayer.play();

            // Update album information
            albumTitle.textContent = this.getAttribute('data-title');
            albumInfo.textContent = this.getAttribute('data-artist');
            albumImg.src = this.querySelector('.card-img').src;

            // Update playback bar
            audioPlayer.addEventListener('timeupdate', function () {
                const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                playbackBar.value = progress;
                currTime.textContent = formatTime(audioPlayer.currentTime);
                totTime.textContent = formatTime(audioPlayer.duration);
            });
        });
    });

    // Toggle play/pause icon functionality
    playPauseIcon.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
        // Update playback bar
        audioPlayer.addEventListener('timeupdate', function () {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            playbackBar.value = progress;
            currTime.textContent = formatTime(audioPlayer.currentTime);
            totTime.textContent = formatTime(audioPlayer.duration);
        });
    });

    // Helper function to format time in MM:SS
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});


function showGlobalContent() {
    var globalContent = document.getElementById("globalContent");
    globalContent.style.display = "block";
    var existingContent = document.getElementById("existing-content");
    existingContent.style.display = "none";
}


function showIndianContent() {
    var indianContent = document.getElementById("indianContent");
    indianContent.style.display = "block";
    var existingContent = document.getElementById("existing-content");
    existingContent.style.display = "none";
}

function showExistingContent() {
    var indianContent = document.getElementById("indianContent");
    indianContent.style.display = "none";
    var globalContent = document.getElementById("globalContent");
    globalContent.style.display = "none";
    var searchContent = document.getElementById("searchContent");
    searchContent.style.display = "none";
    var existingContent = document.getElementById("existing-content");
    existingContent.style.display = "block";
}

function showSearchContent(){
    var indianContent = document.getElementById("indianContent");
    indianContent.style.display = "none";
    var globalContent = document.getElementById("globalContent");
    globalContent.style.display = "none";
    var existingContent = document.getElementById("existing-content");
    existingContent.style.display = "none";
    var searchContent = document.getElementById("searchContent");
    searchContent.style.display = "block";
}