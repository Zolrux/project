"use strict";

const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Tanya',
        dad: 'Igor'
    }
};

// console.log(JSON.parse(JSON.stringify(person)));
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);
