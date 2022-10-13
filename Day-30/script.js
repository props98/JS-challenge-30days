"use strict";

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    // console.log(holes.length);
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole) {
        console.log('Thats the same one');
        return randomHole(holes)
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    // console.log(time, hole);

    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time)
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
    }, 10000)
}

function bunc(e) {
    // console.log(e);
    if (!e.isTrusted) return; // don't real click
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bunc));