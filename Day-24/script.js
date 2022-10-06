'use strict';

const nav = document.querySelector('.nav_menu');
const topOfNav = nav.offsetTop;

function fixNav() {
    // console.log(topOfNav, window.scrollY); // 459 464
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'; // 71
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0; // 71
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);