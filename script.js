"use strict";

//To String

console.log(String(null));
console.log(typeof (null + ''));

const num = 5;

console.log("https://vk.com//catalog/" + num);

const fontSize = 26 + 'px';

// To Number

console.log(typeof (Number('4')));

console.log(typeof (+'5'));

console.log(typeof (parseInt("15px", 10)));

let answer = +prompt("Hello", "");

// To boolean

let switcher = null; // Null это false

switcher = 1;

if (switcher) {
    console.log("Working...");
}

console.log(typeof(Boolean('4')));

console.log(typeof (!!"444444")); // boolean

