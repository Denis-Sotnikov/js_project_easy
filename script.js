'use strict'
let numberOfFilms;
start();
console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}
rememberMyFilms();
detectPersonalLevel();
writeYourGenres(); 
showMyDB(personalMovieDB.privat);


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms==''||numberOfFilms==null||isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function detectPersonalLevel() {
    if (numberOfFilms<=10) {
        alert('Вы смотрите довольно мало фильмов');
    } else {
        if (numberOfFilms>10&&numberOfFilms<=30) {
            alert('Вы классический зритель');
        } else {
            if (numberOfFilms>30) {
                alert('Вы киноман');
            }
        }
    }
}

function rememberMyFilms() {
    for (let index = 0; index < 2; index++) {
        let nameOfMovie = prompt('Один из последних просмотренных фильмов?', '');
        
        if(nameOfMovie==''||nameOfMovie==undefined) {
            console.log("Нельзя оставлять пустую строку");
            alert("Введите название фильма");
            index--;
            continue;
        }

        if(nameOfMovie.length>50) {
            console.log("Название фильма должно быть не более 50 символов");
            alert("Название фильма должно быть не более 50 символов");
            index--;
            continue;
        }
        let countOfMovie = prompt('На сколько оцените его?', '');
        personalMovieDB.movies[nameOfMovie] = countOfMovie;
    }
}

function showMyDB(hidden) {
    if (hidden==false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let index = 0; index < 3; index++) {
        personalMovieDB.genres[index] = prompt(`Ваш любимый жанр под номером ${index+1}`);
    }    
}