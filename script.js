"use strict";

// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`)
}

const kostya = new User('Kostya', 18);
const alex = new User('Alex', 20);

kostya.exit();

kostya.hello();
alex.hello();

console.log(kostya);
console.log(alex);