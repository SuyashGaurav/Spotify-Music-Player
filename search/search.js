const cardData = [
    {
        dataSrc: "songs/Mahiye.mp3",
        dataTitle: "Mahiya Jinna Sohna",
        artist: "Darshan Ravel",
        imgSrc: "images/card2img.jpeg"
    },
    {
        dataSrc: "songs/Alone.mp3",
        dataTitle: "Alone",
        artist: "Marshmello",
        imgSrc: "images/card7img.jpg"
    },
    {
        dataSrc: "songs/Mere-paas.mp3",
        dataTitle: "Mere Paas Tum Ho",
        artist: "Rahat Fateh Ali Khan",
        imgSrc: "images/card3img.jpeg"
    },
    {
        dataSrc: "songs/Aashiyan.mp3",
        dataTitle: "Aashiyan",
        artist: "Pritam, Shreya Ghoshal, Nikhil Paul George",
        imgSrc: "images/card4img.jpg"
    },
    {
        dataSrc: "songs/Bella-Ciao.mp3",
        dataTitle: "Bella Ciao",
        artist: "Money Heist",
        imgSrc: "images/card8img.jpg"
    },
    {
        dataSrc: "songs/Sunflower.mp3",
        dataTitle: "Sunflower - Spider-Man",
        artist: "Post Malone, Swae Lee",
        imgSrc: "images/card9img.jpg"
    },
    {
        dataSrc: "songs/Happier.mp3",
        dataTitle: "Happier",
        artist: "Marshmello, Bastille",
        imgSrc: "images/card10img.jpg"
    },
    {
        dataSrc: "songs/Vaaste.mp3",
        dataTitle: "Vaaste",
        artist: "Dhvani Bhanushali, Nikhil D'Souza",
        imgSrc: "images/card11img.jpg"
    },
    {
        dataSrc: "songs/Bad-Liar.mp3",
        dataTitle: "Bad Liar",
        artist: "Imagine Dragons",
        imgSrc: "images/card12img.jpg"
    },
    {
        dataSrc: "songs/Choo-Lo.mp3",
        dataTitle: "Choo Lo",
        artist: "The Local Train",
        imgSrc: "images/card13img.jpg"
    }
    // Add other card data here
];

function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Filter cards based on the search input
    const results = cardData.filter(card => card.dataTitle.toLowerCase().includes(searchInput));

    // Display search results 
    results.forEach(result => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-src', result.dataSrc);
        cardElement.setAttribute('data-title', result.dataTitle);
        cardElement.setAttribute('data-artist', result.artist);

        cardElement.innerHTML = `
            <span class="play-icon"><i class="fa-solid fa-play"></i></span>
            <img src="${result.imgSrc}" class="card-img">
            <p class="card-title">${result.dataTitle}</p>
            <p class="card-info">${result.artist}</p>
        `;

        // Append the card to the searchResultsContainer
        searchResultsContainer.appendChild(cardElement);

        const audioPlayer = document.getElementById('audioPlayer');
        const playbackBar = document.querySelector('.progress-bar');
        const currTime = document.querySelector('.curr-time');
        const totTime = document.querySelector('.tot-time');
        const albumTitle = document.querySelector('.album-title');
        const albumInfo = document.querySelector('.album-info');
        const albumImg = document.querySelector('.album img');

        // Add event listener to the dynamically created card
        cardElement.addEventListener('click', function () {
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

        // Helper function to format time in MM:SS
        function formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    });
}


var audioPlayer = document.getElementById('yourAudioPlayerId'); // Replace with your actual audio player ID

function togglePlayPause() {
    var playPauseIcon = document.getElementById('playPauseIcon');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
}