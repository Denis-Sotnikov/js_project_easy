'use strict'
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    showMyDB: function(hidden) {
        if (hidden==false) {
            console.log(personalMovieDB);
        }
    },
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(this.count ==''|| this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (this.count<=10) {
            alert('Вы смотрите довольно мало фильмов');
        } else {
            if (this.count > 10 && this.count <= 30) {
                alert('Вы классический зритель');
            } else {
                if (this.count > 30) {
                    alert('Вы киноман');
                }
            }
        }
    },
    rememberMyFilms: function() {
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
    },
    writeYourGenres: function() {
        for (let index = 0; index < 3; index++) {
            personalMovieDB.genres[index] = prompt(`Ваш любимый жанр под номером ${index+1}`);

            if(personalMovieDB.genres[index]==''||personalMovieDB.genres[index]==undefined) {
                console.log("Нельзя оставлять пустую строку");
                alert("Введите название жанра");
                index--;
                continue;
            }
        }
        for (let index = 0; index < 3; index++) {
            console.log(`Любимый жар №${index+1} - это ${this.genres[index]}`);
        }    
    },
    toggleVisibleMyDB: function() {
        if(this.privat == false) {
            this.privat=true;
        } else {
            this.privat=false;
        }
    }
}

personalMovieDB.start();
console.log(personalMovieDB.count);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres(); 
personalMovieDB.showMyDB(personalMovieDB.privat);



