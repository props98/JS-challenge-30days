'use strict';

const inventors = [
    {first: 'Albert', last: 'Enstein', year: 1879, passed: 1955},
    {first: 'Issac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolas', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];


const people = ['Emma', 'Charlotte', 'Amelia', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Luna', 'Camila', 'Gianna', 'Elizabeth', 'Eleanor', 'Ella', 'Abigail', 'Sofia', 'Avery', 'Scarlett', 'Emily', 'Aria', 'Penelope', 'Chloe', 'Layla', 'Mila', 'Nora', 'Hazel', 'Madison', 'Ellie', 'Lily', 'Nova', 'Isla', 'Grace', 'Violet', 'Aurora', 'Riley', 'Zoey', 'Willow', 'Emilia', 'Stella', 'Zoe', 'Victoria', 'Hannah', 'Addison', 'Leah', 'Lucy', 'Eliana', 'Ivy', 'Everly', 'Lillian', 'Paisley', 'Elena', 'Naomi', 'Maya', 'Natalie', 'Kinsley', 'Delilah', 'Claire', 'Audrey', 'Aaliyah'];


////////////////! Array.prototype.filter()
//? 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});
// console.table(fifteen);


////////////////! Array.prototype.map()
//? 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames[0]);


////////////////! Array.prototype.sort()
//? 3. Sort the inventors by birthday, oldest to youngest
// console.table(inventors);
// const ordered = inventors.sort(function(a, b) {
//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.table(ordered);


////////////////! Array.prototype.reduce()
//? 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
// console.log(totalYears);

//? Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
// console.table(oldest);

//todo: Сделать подсчет возростов и отсортировать

//todo...



//? Create a list of Boulevards in Paris that contain 'de' anywhere in the name
//? https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Сортировка списка с названиями на сайте википедии

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));

//? 7. sort Exercise
//? Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne) {
    return lastOne > nextOne ? 1 : -1;
});
// console.log(alpha);

//todo: Сделать сортировку с именем и фамилией, но сортировка по фамилии или по имени.

//todo...



//? 8. Reduce Ecercise
//? Sum up the instances of each of these
const data = ['car', 'bus', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }

    obj[item]++;
    return obj;
}, {});

console.log(transportation);