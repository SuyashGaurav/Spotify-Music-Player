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
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');

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

// Helper function to format time in MM:SS
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


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


function toggleHeart(){
    let likeBtn = document.getElementById("likeBtn");
    likeBtn.classList.toggle("heart-filled");   
}

function updateVolume(volume) {
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = parseFloat(volume);
}

function toggleMute() {
    let audioPlayer = document.getElementById('audioPlayer');
    let muteIcon = document.getElementById("muteIcon");
    if(audioPlayer.volume == 0){
        audioPlayer.volume = 0.8;
        muteIcon.classList.remove("fa-volume-xmark");
        muteIcon.classList.add("fa-volume-high");
    }
    else{
        audioPlayer.volume = 0;
        muteIcon.classList.remove("fa-volume-high");
        muteIcon.classList.add("fa-volume-xmark");
    }
}

function showLyricsWindow() {
    var lyricsBox = document.getElementById('lyricsBox');
    lyricsBox.innerHTML = "Lyrics not found";
    lyricsBox.style.display = 'block';
    setTimeout(()=> {
        lyricsBox.style.display = "none";
    }, 2000)
}

function showPlaylist() {
    var lyricsBox = document.getElementById('lyricsBox');
    lyricsBox.innerHTML = "Playlist not found";
    lyricsBox.style.display = 'block';
    setTimeout(()=> {
        lyricsBox.style.display = "none";
    }, 2000)
}

function showPodcast() {
    var lyricsBox = document.getElementById('lyricsBox');
    lyricsBox.innerHTML = "No podcasts found";
    lyricsBox.style.display = 'block';
    setTimeout(()=> {
        lyricsBox.style.display = "none";
    }, 2000)
}

function showLibrary() {
    var lyricsBox = document.getElementById('lyricsBox');
    lyricsBox.innerHTML = "No libraries found";
    lyricsBox.style.display = 'block';
    setTimeout(()=> {
        lyricsBox.style.display = "none";
    }, 2000)
}

//download
window.addEventListener('load', function () {
    var downloadIcon = document.getElementById('downloadIcon');
    
    if (downloadIcon) {
      downloadIcon.addEventListener('click', function() {
        var audioPlayer = document.getElementById('audioPlayer');
        var downloadLink = document.createElement('a');

        downloadLink.href = audioPlayer.src;
        downloadLink.download = `${audioPlayer.src}`;

        document.body.appendChild(downloadLink);

        downloadLink.click();

        document.body.removeChild(downloadLink);
      });
    } else {
      console.error('Download icon not found.');
    }
  });

//Shuffle
function changeSong(){
    let cards = document.querySelectorAll('.card')
    let randNo = Math.floor(Math.random() * cards.length)
    let randCard = cards[randNo]
    randCard.click()
}