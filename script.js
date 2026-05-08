let secondsElapsed = 0;
let timerInterval = null;
const display = document.getElementById('display');
const statusText = document.getElementById('status');

const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
};

const startTimer = () => {
    if (timerInterval) return; 
    
    statusText.innerText = "Status: Running";
    timerInterval = setInterval(function() {
        secondsElapsed++;
        display.innerText = formatTime(secondsElapsed);
    }, 1000);
};

const pauseTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    statusText.innerText = "Status: Paused";
};

const resetTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    secondsElapsed = 0;
    display.innerText = "00:00:00";
    statusText.innerText = "Status: Reset";
};


document.getElementById('startBtn').addEventListener('click', function() {
    startTimer();
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    pauseTimer();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    resetTimer();
});

window.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    
    if (key === 's') {
        startTimer();
    } else if (key === 'p') {
        pauseTimer();
    } else if (key === 'r') {
        resetTimer();
    }
});