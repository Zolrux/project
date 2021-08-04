"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error!');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let question = prompt(`Ваш любимый жанр по номером ${i + 1}`);
            if (question === null || question === '') {
                i--;
            }
            personalMovieDB.genres[i] = question;
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
