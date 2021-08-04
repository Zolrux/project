"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 100,
    armor: 75,
    sayHello: function() {
        console.log("Hello");
    }
};

const John = Object.create(soldier); // Создание обьекта прототипа soldier

// const John = {
//     health: 45
// };

// John.__proto__ = soldier; // Устаревшая запись

// Object.setPrototypeOf(John, soldier);

John.sayHello();