// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// newStr = str.substring(1,13);
// console.log(newStr);


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// const stringToArray = () => {
//     let arr = str.split(' ');
//     return arr
// };
// console.log(stringToArray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let newArr = arr.map(item => item + '')
// console.log(newArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let arr = [11, 21, 3];
// const sortNums = ( direction) => {
//     if (direction === 'ascending'){
//         arr = arr.sort((item1, item2) => item1 - item2)
//     }
//     if (direction === 'descending') {
//         arr = arr.sort((item1, item2) => item2 - item1)
//     }
// }
// sortNums("descending", arr )
// console.log(arr);


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((item1, item2) => item2.monthDuration - item1.monthDuration);
// console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(item => item.monthDuration > 5);
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// const cards = [
//     {cardSuit: 'heart', value: 6, color:'black'  },
//     {cardSuit: 'clubs', value: 'Ace', color:'red'  },
//     {cardSuit: 'clubs', value: 9, color:'red' },
//     {cardSuit: 'diamonds', value: 'Ace', color:'black'  },
//     {cardSuit: 'heart', value: 10, color:'black'  },
//     {cardSuit: 'spades', value: 'Queen', color:'red'  },
// ];

// let filter = cards.filter((item) => item.value === 'Ace' && item.cardSuit === 'spades');
// console.log(filter);

// let filter = cards.filter((item) => item.value === 6);
// console.log(filter);

// let filter = cards.filter((item) => item.color === 'red');
// console.log(filter);

// let filter = cards.filter((item) => item.cardSuit === 'diamonds');
// console.log(filter);

// let filter = cards.filter((item) => (item.value >= 9 || typeof item.value === 'string') && item.cardSuit === 'clubs' );
// console.log(filter);
//
// let filterCards = cards.reduce((accumulator, item) =>{
//     if (item.cardSuit === 'spades'){
//         accumulator.spades.push(item)
//     }
//     if (item.cardSuit === 'diamonds'){
//         accumulator.diamonds.push(item)
//     }
//     if (item.cardSuit === 'hearts'){
//         accumulator.hearts.push(item)
//     }
//     if (item.cardSuit === 'clubs'){
//         accumulator.clubs.push(item)
//     }
//
//     return accumulator
// },{
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(filterCards);