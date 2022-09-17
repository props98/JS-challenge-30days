'use script';

const dogs = [
    {
        name: 'Snickers',
        age: 2
    },
    {
        name: 'Hugo',
        age: 8
    }
];

function makeGreen() {
    const h1 = document.querySelector('h1');
    h1.style.color = '#BADASS';
    h1.style.fontSize = '50px';
}

//* 14 Must Know Dev Tools Tricks

// 1. Regular
console.log('hello');


// 2. Interpolated Вставка второго текста там где « %s »
console.log('Hello world %s ass ', 'you');

// 3. Styled « %c »
console.log('%c Hello world', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue;');

//* 4. Warning
console.warn('OH Warning!');

//* 5. Error!
console.error('OH ERROR!');

//* 6. Info
console.info('Crocodiles eat 3-4 people per year')

//* 7. Testing « assert » Показывает сообщение если false, если true ничего не показывает
// console.assert(1 === 2, 'That is wrong!')
const h1 = document.querySelector('h1');
console.assert(h1.classList.contains('ouch1'), 'That is wrong!')

//* 8. Clearing - Очищение консоли
console.clear();

// 9. Viewing DOM Elements
console.log(h1);
console.dir(h1);

console.clear();

//* 10. Grouping together
dogs.forEach(dog => {
    // console.group(); // Показывает октрытые группы
    console.groupCollapsed(`${dog.name}`); // Показывает закрытые группы
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});

// 11. Counting
console.count('Wes');
console.count('Wes');
console.count('Steave');
console.count('Wes');
console.count('Wes');
console.count('Steave');
console.count('Steave');
console.count('Steave');
console.count('Wes');
console.count('Wes');
console.count('Wes');

console.clear();

// 12. Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// 13. Table
console.table(dogs);


