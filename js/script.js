/* eslint-disable no-unused-vars */
"use strict";



// ---------------------------------------FILMS QUESTIONER-------------------------------------------------------





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Скок фильмов?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скок фильмов?", "");
        }
    },
    rememberMyFIlms: function() {
        for ( let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");


        if (a != null && b != null && a != "" && b  != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function(){

        if (personalMovieDB.count <= 10 ){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count >= 30){
            console.log("Вы классический киноман");
        }else{
            console.log("error");
        }

    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
   
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
          let genre = prompt(`Ваш любимый жанр под номером ${i}`);
          if (genre != '' && genre != null) {
            personalMovieDB.genres[i - 1] = genre;
          } else {
            console.log('error');
            i--;
          }
        }
        personalMovieDB.genres.forEach((item, i) => {
           console.log( `Любимый жанр ${i + 1} - это ${item}`);

        });
      }
    
   // writeYourGenres: function(){
    //     for (let i = 1; i <= 3; i++) {
    //         if(personalMovieDB.genres != '' && personalMovieDB.genres != null){
    //             personalMovieDB.genres[i - 1] = prompt(`"Ваш любимый жанр под номером ${i}"`);
    //         }else{
    //             console.log('error');
    //             i--;
    //         }
    //     }
    // }
                




};

//----------------------------alternative loops--------------
                // let i = 0;

                    // do{
                    //     const a = prompt("Один из последних просмотренных фильмов?", ""),
                    //     b = prompt("На сколько оцените его?", "");
                        
                    //     if (a != "" && b != "" && a != null && b != null && a.length < 50){
                    //         personalMovieDB.movies[a] = b;
                    //         console.log("Done");
                    //         } else {
                    //             console.log("Error");
                    //             i--;
                    //         }
                    //         i++;
                    //     }while (i < 2 );



            // let i = 0;

            // while (i < 2) {
            //     const a = prompt("Один из последних просмотренных фильмов?", ""),
            //     b = prompt("На сколько оцените его?", "");

            //     if (a != "" && b != "" && a != null && b != null && a.length < 50){
            //         personalMovieDB.movies[a] = b;
            //         console.log("Done");
            //     }else{
            //         console.log("error");
            //         i--;
            //     }
            //     i++;
            // }

 













