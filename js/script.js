/* eslint-disable no-unused-vars */
"use strict";


//-----------------------------------------------SWITCH (alternative IF ELSE construction)
// if (1) {
//     console.log('Ok');
// }else{
//     console.log('Error');
// }


// if (num < 49) {
//     console.log('Error');
// }else if (num > 100) {
//     console.log("Too much");
// }else {
//     console.log("Ok!");
// }

// ------

// (num === 50) ? console.log("Ok!") : console.log('Error');
// const num = 50;

// --------

// const num = 50;

// switch (num) {
    //     case 49:
    //         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 51:
//         console.log('Good');
//         break;
//     default:
//         console.log('Not this time');
//      break;
//     }

// -------------------------------------------------------------------------------Loops (циклы)----------------------------------
// let num = 50;

// while (num <= 55) {
    //     console.log(num);
    //     num++;
    // }

    // ------

    // do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// -------

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         break; - прерывает цикл если текущая итерация РАВНА значению 6
//         continue; - пропускает итерацию которая РАВНА значению и ПРОДОЛЖАЕТ цикл.
//     }
//     console.log(i);
// }





// ---------------------------------------FILMS QUESTIONER-------------------------------------------------------

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Скок фильмов?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скок фильмов?", "");
    }
}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
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

function rememberMyFIlms() {
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
    }

// rememberMyFIlms();

function detectPersonalLevel(){

            if (personalMovieDB.count <= 10 ){
                console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
                console.log("Вы классический зритель");
            }else if (personalMovieDB.count >= 30){
                console.log("Вы классический киноман");
            }else{
                console.log("error");
            }

        }

// detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres (){
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`"Ваш любимый жанр под номером ${i}"`);

    }


}
writeYourGenres();









