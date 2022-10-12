"use strict";

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

   countdown = setInterval( () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        // Check to stop it
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function addZero(zero) {
    return `${zero < 10 ? '0' : ''}${zero}`;
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    const display = `${minutes}:${addZero(remainderSeconds)}`;
    timerDisplay.textContent = display;
    document.title = display;
    // console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    // endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    endTime.textContent = `Be back at ${hour}:${addZero(minutes)}`;
}

function startTimer() {
    const seconds = this.dataset.time;
    // console.log(seconds);
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    // console.log(e);
    // console.log(this.minutes);
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});