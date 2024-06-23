
const timeDisplay = document.getElementById('time-display');


const startTime = new Date('2009-12-02T00:00:00Z');

function updateTime() {
    const currentTime = new Date();

    const timeDiff = currentTime - startTime;

    const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    timeDisplay.textContent = `${yearsDiff}`;
}

updateTime();

setInterval(updateTime, 1000);
