// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Background Music Toggle
const musicBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.style.opacity = '0.5';
    } else {
        bgMusic.play();
        musicBtn.style.opacity = '1';
    }
    isPlaying = !isPlaying;
});

// Countdown Timer
const countdownDate = new Date("Oct 24, 2026 10:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
}, 1000);

// Envelope Logic
document.getElementById('open-invite-btn').addEventListener('click', function() {
    document.getElementById('envelope-wrapper').classList.add('is-open');
    this.style.display = 'none';
});
