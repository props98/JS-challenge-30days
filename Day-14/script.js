'use strict';

//! JS Reference VS Copy «Array»

// start with strings numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'wes';
let name2 = name;
console.log(name, name2);
name = 'wesles';
console.log(name, name2);

//? Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
//? and we want to make a copy of it.
const team = players;
// console.log(players, team);
//? you might think we can just do something like this:
team[0] = 'Tony';
// console.log(team, players);
//? however what happens when we update that array?


//? now here is the problem!

//? oh no - we have edited the original array too!

//? why? It's because that is an array reference, not an array copy.
//? The both pont to the some array!

//? So, how do we fix this? We take a copy insteed!
const team2 = players.slice();
team2[0] = 'LEX';
// console.log(players);
// console.log(team);
// console.log(team2);

//? one day

//? or create a new array and concat the old one in
const team3 = [].concat(players);

//? or use the new ES6 «Spread»
const team4 = [...players];
team4[3] = 'heee hawww';
console.log(team4);

const team5 = Array.from(players);

//? now when we update it, the original one isn't changed

//? the same thing goes for objects, let's say we have a person object



//? with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
//? and think we make a copy:
// const captain = person; 
// captain.number = 99;

// console.log(captain);
// console.log(person);

//? how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });

//? we well hopefully soon see the object ...spread
// const cap3 = {...person};

//? things to note - this is only 1 level deep - both for Arrays and Objects. Lodash has a cloneDeep method, but you shoud think twice before using it.
const wes = {
    name: 'wes',
    age: 100,
    social: {
        twitter: '@wes',
        facebook: 'wesbos'
    }
};

// console.clear();
// console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes)); // Object
// const dev2 = JSON.stringify(wes); // String
console.log(typeof(dev2));