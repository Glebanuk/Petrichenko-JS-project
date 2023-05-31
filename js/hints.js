/* eslint-disable no-unused-vars */
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

// --------------------------------------------------Способы перебора для получения свойств и значений обьекта--------------------------

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors:{
//         border: "black",
//         bg: "red"
//     }
// };
// // -----способ 1-----

// for ( let key in options) {
//     console.log(` Свойство ${key} имее значение ${options[key]}`);
// }

//-----способ перебора свойств обьекта(colors),который внутри обьекта(options)

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(` Свойство ${i} имее значение ${options[key][i]}`);
//         }
//     }else{
//         console.log(` Свойство ${key} имее значение ${options[key]}`);
//     }
// }

// ---Метод для получения колличества(цифры) свойств в обьекте. ВАЖНЫЙ.
// console.log(Object.keys(options).length);

// ---Создание таких методов вручную-------

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors:{
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// ---------------------------------------------------------------Массивы и их методы----------------------------------------

//---------------------Перебор массива
// ----способ 1 (цикл  )

//     const arr = [1, 2, 3, 4, 5, 6];

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
// }

// ----способ 2 (for of)
    
    // const arr = [1, 2, 3, 4, 5, 6];
    // ****value - каждый отдельный элемент массива
    // for (let value of arr) {
    //     console.log(value);
    // }

// ---------способ 3 (метод for each)

// const arr = [1, 2, 3, 4, 5, 6];

// *** item - произвольное название элем. из массива 
// *** i - номер элем. по порядку внутри массива (0, 1, 2 и тд)
// *** arr - ссылка на имя массива который переберается
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr} `);

// });



// -------- основные методы массивовdfv
// vfd
// const str = prompt("", "");
// *** split- формирует массив на основании строк данных введенных пользователем.В скобках находится разделитель через который вводятся данные(через запятую).
// const products = str.split(", ");
// *** join- соед элем массива и выводит данные в строку.С разделителем который указан в скобках как аргумент.
// console.log(products.join('; '));


// ------ Псевдомассивы
// Псевдомассив-это ОБЪЕКТ который совпадает по своей структуре с структурой массива и просто хранит в себе данные по порядку . Отличие в том, что он НЕ имиеет методов .

// ----------------------------Передача данных по ссылке и по значению(создание копий обьектов, соединения нескольких обьектов)---------------------------------------------------------------------------
// const obj = {
//     a: 5,
//     b: 2
// };

// const copy = obj;

// copy.a = 10;
// *** copy.a = 10; - этот код переназначит значение свойства obj, так как copy НЕ копирует obj, а обращается к нему по ссылке.
// console.log (copy);
// console.log (obj);

// ------------создание копий обьектов

// -----способ 1 (с помощью цикла for in)

//  function copy(mainObj) {
//     let objCopy ={};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
//  }

//  const num = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
//  };

//  const newNum = copy(num);

 // *** newNum.a =10; - изменяем значение у свойства "a", в копии обьекта num (newNum). При этом в основном обьекте (num) значения свойства не меняются.
 
//  newNum.a =10;

// *** newNum.c.x = 10; - эта строка ИЗМЕНИТ значение основного объкта (num), так как идет обращение по ССЫЛКЕ.Это происходит по тому, что копия свойств  создается ТОЛЬКО ПЕРВОГО УРОВНЯ ВЛОЖЕНОСТИ.

//  console.log(newNum);
//  console.log(num);

//---------способ 2 (с помощью метода Object.assign())

// const add = {
//     d: 17,
//     e: 20
// };

// *** {} - первый аргумент создает пустой объект. add - второй аргумент передаем все свойства ИЗ объекта add (клонируем).

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);



// ----------------соединения нескольких обьектов (Object.assign())

// const num = {
//         a: 2,
//         b: 5,
//         c: {
//             x: 7,
//             y: 4
//         }
//      };

//      const add = {
//         d: 17,
//         e: 20
//     };

//     console.log(Object.assign(num, add) );

// --------------создание копий  массивов

// ------способ 1 (метод slice())

// const oldArr = ["a", "b", "c"];

// const newArr = oldArr.slice();

// newArr[1] = "asd";

// console.log(newArr);
// console.log(oldArr);

// -------способ 2 (оператор "spread" ... )

// const stas = [ "park", "shirts", "phone"],
//     dad = ["fish", "beer", "sleep"],
//     mom = ["lap-top", "nails", "picture"],

// *** "..." - РАЗВОРАЧИВАЕТ значения указаных массивов (mom,dad,stas) в новом массиве (family)

    // family = [...stas, ...mom, ...dad , "house","money"];

    // console.log(family);
