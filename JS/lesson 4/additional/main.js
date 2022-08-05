// ADDITIONAL1.TXT

// TASK 1

// --створити масив з:
// - з 5 числових значень

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// - з 5 стічкових значень

// let arr = ['hi', 'my', 'name', 'is', 'Dasha'];
// console.log(arr);

// - з 5 значень стрічкового, числового та булевого типу

// let arr = [1, true, 'hi', -345, ''];
// console.log(arr);

// - та вивести його в консоль


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 1;
// arr[1]= true;
// arr[2] = 'Hi';
// console.log(arr);



// TASK 2

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i = 0;
// while(i< arr.length){
//     console.log(arr[i]);
//     i++
// }

//  2. перебрати його циклом for
// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr.length){
//     if(i % 2 ==1){
//         console.log(arr[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 == 1){
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length){
//     if(i % 2 ==0){
//         console.log(arr[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 == 0){
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
//  for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 3 == 0){
//         arr[i] = 'okten'
//     }
// }
// console.log(arr);

// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//зворотній цикл while
// let i = arr.length - 1;
// while(i >= 0){
//     console.log(arr[i]);
//     i--
// }

// зворотній цикл while для непарних індексів
// let i = arr.length - 1;
// while (i >= 0){
//     if (i % 2 == 1){
//         console.log(arr[i])
//     }
//     i--
// }

// зворотній цикл while для парних індексів
// let i = arr.length - 1;
// while (i >= 0){
//     if (i % 2 == 0){
//         console.log(arr[i])
//     }
//     i--
// }

//зворотній цикл for для парних індексів
// for (let i = arr.length; i >= 0; i--){
//     if (i % 2 == 0){
//         console.log(arr[i]);
//     }
// }

//зворотній цикл for для непарних індексів
// for (let i = arr.length; i >= 0; i--){
//     if (i % 2 == 1){
//         console.log(arr[i]);
//     }
// }

//завдання 7
//  for(let i = arr.length -1 ; i >= 0; i--){
//     if(arr[i] % 3 == 0){
//         arr[i] = 'okten'
//     }
//      console.log(arr[i]);
// }

// TASK 3

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// for (i of arr){
//     console.log(i);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 'a', true, false, 345, 'fgt', 'asrtyu', 2, false, -2764];
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }


// let arr = [1, 'a', true, false, 345, 'fgt', 'asrtyu', 2, false, -2764];

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (element of arr){
//     if ( typeof element == "boolean"){
//         console.log(element)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (element of arr){
//     if ( typeof element == "number"){
//         console.log(element)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (element of arr){
//     if ( typeof element == "string"){
//         console.log(element)
//     }
// }

// TASK 4

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 1;
// arr[1] = '3fv';
// arr[2] = true;
// arr[3] = 'eft';
// arr[4] = 345;
// arr[5] = false;
// arr[6] = -990;
// arr[7] = [1,2,3];
// arr[8] = {name: 'Dasha', age: 18};
// arr[9] = 'sss';
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log(i)
//     document.write(`<div> ${i} </div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
//     console.log(i)
//     document.write(`<div> ${i} </div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2){
//     console.log(i)
//     document.write(`<div> ${i} </div>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//         document.write(`<div> ${i} </div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++){
//     if(i % 2 == 1){
//         console.log(i)
//         document.write(`<div> ${i} </div>`)
//     }
// }


// TASK 5

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: 'Anxious people',
        pages: 416,
        authors: ['Fredrik Backman'],
        genre: ['Modern literature']
    },
    {
        name: 'The Fellowship Of The Ring',
        pages: 448,
        authors: ['Джон Р. Р. Толкін'],
        genre: ['novel', 'fantasy']
    },
    {
        name: 'The goldfinch',
        pages: 864,
        authors: ['Donna Tartt', 'Mr. Cheek', 'Ms. Cheek'],
        genre: ['Novel']
    },
    {
        name: 'A Man Called Ove',
        pages: 295,
        authors: ['Fredrik Backman'],
        genre: ['Novel']
    },
    {
        name: 'New Fairy',
        pages: 956,
        authors: ['Skott Frenchesko', 'Fredrik Lowry'],
        genre: ['Fairytale']
    }
]

// -знайти наібльшу книжку.
// let maxPages = books[0];
// for (const book of books) {
//     if (book.pages > max.pages){
//         max = book
//     }
// }
// console.log(max.name);

// - знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenre = books[0];
// for (const book of books) {
//     if (book.genre.length > maxGenre.genre.length){
//         maxGenre = book
//     }
// }
// console.log(maxGenre.name);

// - знайти книжку/ки з найдовшою назвою
// let maxName = books[0];
// for (const book of books) {
//     if (book.name.length > maxName.name.length){
//         maxName = book
//     }
// }
// console.log(maxName.name);

// - знайти книжку/ки які писали 2 автори
// for (const book of books) {
//     if (book.authors.length == 2){
//         console.log(book.name);
//     }
// }

// - знайти книжку/ки які писав 1 автор
// for (const book of books) {
//     if (book.authors.length == 1){
//         console.log(book.name);
//     }
// }




