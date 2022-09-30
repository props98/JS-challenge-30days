'use strict';

// const timeNodes = document.querySelectorAll('[data-time]');
// console.log(timeNodes);

//* NodeList to Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

//* Add time from data array
const seconds = timeNodes
                    .map(node => node.dataset.time)
                    .map(timeCode => {
                        //* Delete «:»
                        const [minutes, seconds] = timeCode.split(':').map(parseFloat);
                        //* Return all seconds in array
                        return (minutes * 60) + seconds;
                    })
                    //* Total number of all video seconds
                    .reduce((total, videoSeconds) => {
                        return total + videoSeconds;
                    });

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);




