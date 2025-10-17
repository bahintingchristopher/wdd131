// Initialize scores
let score1 = 0;
let score2 = 0;

// Cache DOM elements for better performance
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');

// Increase score
function increaseScore(player) {
    if (player === 1) {
        score1++;
        score1El.innerText = score1;
    } else if (player === 2) {
        score2++;
        score2El.innerText = score2;
    }
}

// Decrease score (but not below 0)
function decreaseScore(player) {
    if (player === 1 && score1 > 0) {
        score1--;
        score1El.innerText = score1;
    } else if (player === 2 && score2 > 0) {
        score2--;
        score2El.innerText = score2;
    }
}

// Reset scores
function resetScore() {
    score1 = 0;
    score2 = 0;
    score1El.innerText = score1;
    score2El.innerText = score2;
}

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/wdd131/pingpong/service-worker.js')

            .then((reg) => console.log('✅ Service Worker registered:', reg.scope))
            .catch((err) => console.error('❌ Service Worker registration failed:', err));
    });
}
