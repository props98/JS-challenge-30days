"use strict";

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.count(e);
    // console.log(window.scrollY); // Отслеживание верхней точки окна просмотра
    sliderImages.forEach(sliderImage => {
        // Отслеживание серидины анимированного имиджа
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        console.log(`Отслеживание имиджа: ${slideInAt}`); 

        // Отслеживанжие нижней части имиджа
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log(`imageBootom: ${imageBottom}`);

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        console.log(`Половина имиджа: ${isHalfShown}`);

        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));