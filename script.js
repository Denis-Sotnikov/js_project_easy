/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
'use strict '
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms<=10) {
    alert('Вы смотрите довольно мало фильмов')
} else {
    if (numberOfFilms>10&&numberOfFilms<=30) {
        alert('Вы классический зритель');
    } else {
        if (numberOfFilms>30) {
            alert('Вы киноман');
        }
    }
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
} 
/*let nameOfMovie = prompt('Один из последних просмотренных фильмов?', '');
let countOfMovie = prompt('На сколько оцените его?', '');
let nameOfMovie_1 = prompt('Один из последних просмотренных фильмов?', '');
let countOfMovie_1 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[nameOfMovie] = countOfMovie;
personalMovieDB.movies[nameOfMovie_1] = countOfMovie_1;
console.log(personalMovieDB.movies);*/

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