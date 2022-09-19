'use strict';

let resetButton = document.querySelector('button'); 
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

// Обнуление  чекбоксов
resetButton.addEventListener('click', () => {
    checkboxes.forEach(checkbox => {
        // console.log(checkbox);
        checkbox.checked = false;
    })
});

let lastChecked;

function handleCheck(e) {
    // Проверяем нажата ли клавиша shift
    // И проверяем выбран ли чекбокс
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // Иди в начало и сделай что мы просим
        // Зациклим каждый отдельный чекбокс
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox == this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting check in between!');
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));