// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = 1; // True
// x = 0; // False
// x = -3; // True
// x != 0 ? console.log('True'): console.log('False')


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = Math.floor(Math.random()*60);
// console.log(time);
// if (time >= 0 && time < 15) {
//     console.log('In the first');
// } else if (time >= 15 && time < 30) {
//     console.log('In the second');
// } else if (time >= 30 && time < 45){
//     console.log('In the third');
// } else {
//     console.log('In the fourth');
// };


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

// let day = Math.floor(Math.random() * 31) + 1;
// console.log(day);
// if (day >= 1 && day < 11){
//     console.log('In the first');
// } else if (day >= 11 && day < 21){
//     console.log('In the second');
// } else{
//     console.log('In the third');
// };


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('Choose number of the day:');
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log("????");
// };

//  - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt('Choose your first number:');
// let number2 = +prompt('Choose your second number:');
//
// if (number1 === number2) {
//     console.log('Numbers are equal');
// } else if (number1 > number2){
//     console.log(`${number1} is bigger`);
// } else if (number2 > number1){
//     console.log(`${number2} is bigger`);
// } else {
//     console.log('Please, write the numbers!');
// }


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення
// "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)



// let x = 1;
//
// if(!x || !!x == false){
//     x = 'default'
// }
// console.log(x)


