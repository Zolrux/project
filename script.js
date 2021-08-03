"use strict";

/* let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();
*/

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function toggleVisibleMyDB() {
    if(!personalMovieDB.privat) {
        personalMovieDB.privat = true;
    }
    else {
        personalMovieDB.privat = false;
    }
}

toggleVisibleMyDB();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

/*
function rememberMyFilms() {
    let i = 0;

    while (i < 2) {
        const a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?", '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
        i++;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
*/

/*Callback функция*/

/* function foo(callback) {
    // Есть что-то очень долгое, например супер сложное вычисление.
    // Вопрос, как нам выполнить код после того как это вычисление закончится и использовать результат этого действия?
    let b = 10000000000;
    let result = 0;
    for (let i = 0; i <= b; i++) {
        result = 'result';
    }
    /*  И здесь появляется наш Callback! Он подождет пока вычисления в цикле закончатся и выведет наш результат в консоль.
    callback(result);
}
foo(function(res) {
    console.log(res);
}) */

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test...");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border); */

// console.log(Object.keys(options).length);

/* console.log(options.name);

delete options.name;

console.log(options); */

/* let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter); */

// const arr = [2, 13, 1, 11, 10];
// arr.sort(compareNum);
// console.log(arr);

/* Сортировка массива по числам*/

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(num, i, arr) {
//     console.log(`${i}: ${num} внутри массива ${arr}`)
// });


// arr.pop(); /* Удаляет в конце элемент */

// arr.push(10); /* Добавляет в конец элемент */

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; /* Передача по ссылке */
// copy.a = 10;

// console.log(copy);
// console.log(obj);

/*

function copy(mainObj) {
    let objCopy = {};

    for(let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);

// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'addkhssjdlsg';

// console.log(newArray);
// console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // Spread оператор 

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObject = {...q};

// ***********************************

const soldier = {
    health: 100,
    armor: 100
};

const john = Object.create(soldier);

// const john = {
//     health: 50
// };

// john.__proto__ = soldier; - не используеться

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

*/