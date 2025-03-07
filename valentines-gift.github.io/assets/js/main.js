const welcomeMessage = document.querySelector('.welcome-message');
const startButton = document.querySelector('.start-button');
const giftContainer = document.querySelector('.gift-container');
const giftBox = document.querySelector('.gift-box');
const gallery = document.querySelector('.gallery');
const floatingHeartsContainer = document.querySelector('.floating-hearts');
const musicToggle = document.querySelector('.music-toggle');
let isOpen = false;
let isPlaying = false;

// Create audio element
const bgMusic = new Audio('assets/audio/Ariana_Grande_-_God_is_A_Woman.mp3');
bgMusic.loop = true;

// Event listener for start button
startButton.addEventListener('click', () => {
    welcomeMessage.classList.add('hide');
    setTimeout(() => {
        giftContainer.classList.add('show');
        createHeartBurst();
    }, 500);
});

// Event listener for gift box
giftBox.addEventListener('click', () => {
    if (!isOpen) {
        giftBox.classList.add('open');
        setTimeout(() => {
            gallery.classList.add('show');
            createHeartBurst();
        }, 1000);
        isOpen = true;
    }
});

// Music toggle
musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Function to create floating "hearts" (actually flowers)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart'); // Keeping the class name

    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';

    // Random size
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = size + 'px';

    // Random animation duration
    const duration = Math.random() * 3 + 2;
    heart.style.animation = `floatFlower ${duration}s linear`;

    floatingHeartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 3000);
}

// Function for burst effect
function createHeartBurst() {
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Create floating flowers periodically
setInterval(() => {
    if (Math.random() > 0.7) {
        createHeart();
    }
}, 500);
