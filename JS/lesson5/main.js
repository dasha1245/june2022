// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area (a,b) {
//     return a * b
// }
// console.log(area(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area (r) {
//     return 3.14 * (r*r)
// }
// console.log(area(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let area = (h,r) => {
//     return 2 * 3.14 * r * (h + r)
// }
// console.log(area(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function elementOfArr (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// elementOfArr([1, 2, 3, 4, 5, 6]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p> ${text}</p>`)
// }
// paragraph('Hi, I am a paragraph!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listOfElements (text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`)
// }
// listOfElements('HI!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listOfElements (text, numberOfElem){
//     document.write(`<ul>`)
//     for (let i = 0; i < `${numberOfElem}`; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listOfElements('Hi!', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 2, 'bla bla', true, false];
// function listOfElements() {
//     document.write(`<ul>`)
//     for (const element of arr) {
//         document.write(`<li>${element}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listOfElements();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {
//         id: 12344,
//         name: "kolya",
//         age: 22
//     },
//     {
//         id: 46347,
//         name: "maria",
//         age: 19
//     },
//     {
//         id: 39101,
//         name: "oleg",
//         age: 55
//     }
// ];
// function listOfUsers() {
//     for (const user of users) {
//         document.write(`<div>`)
//         for (key in user){
//             document.write(`<div> ${key} : ${user[key]} </div>`)
//         }
//         document.write('-------------------')
//         document.write(`</div>`)
//     }
// }
// listOfUsers();

// - створити функцію яка повертає найменше число з масиву
// let arr = [102,2,3,4,5,6,1,7,8,9,10];
// let min = arr[0];
// function minNumber () {
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement
//         }
//     }
//     return min
// }
// minNumber(arr)
// console.log(min);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = 0;
// function sumNumbers (arr) {
//     for (const arrElement of arr) {
//         sum += arrElement
//     }
//     return sum;
// }
// sumNumbers([1,2 ,10])
// console.log(sum);


