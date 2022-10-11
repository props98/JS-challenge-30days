"use strict";

const slider = document.querySelector('.container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // console.log(e.pageX);
    startX = e.pageX - slider.offsetLeft; 
    scrollLeft = slider.scrollLeft;
    // console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop function from running
    // console.count(isDown);
    // console.log('Do work!');
    // console.log(startX);

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log({x, startX});
    // const walk = x - startX;
    const walk = (x - startX) * 2;
    // console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
});