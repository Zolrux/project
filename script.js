"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}

showFirstMessage("Hello world!");

console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(8, 3));
// console.log(calc(14, 15));

const logger = function() {
    console.log("Hello");
};

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc(4, 5));