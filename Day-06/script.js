// "use strict";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// console.log(endpoint);
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


console.log(searchInput);
console.log(suggestions);

// Получение данных json по ссылке и внедряем данные в массив
fetch(endpoint) // Возращает «promise»
    .then(blob => blob.json()) // Такжу возращает «promise»
    .then(data => cities.push(...data)); // Возвращает массив объектов с использованием «...»

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return  place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li> `
    }).join('');
    suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);