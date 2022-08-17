// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users =
//    [ new User(1, 'vasya', 'ivanov', 'apsps', 92839101),
//     new User(2, 'oleg', 'olegov', 'dsdzaz', 345678),
//     new User(3, 'nastya', 'batkivna', 'kvkd', 2345678),
//     new User(4, 'vika', 'stepanivna', 'alsmc', 1234567),
//     new User(5, 'vasya', 'lalala', 'sams', 234567),
//     new User(6, 'marta', 'blabla', 'amksxls', 23476),
//     new User(7, 'roman', 'ne_znayu', 'asmcals', 234689876),
//     new User(8, 'nazar', 'nazarov', 'snkals', 24573585),
//     new User(9, 'sasha', 'jonson', 'akawq', 2356908764),
//     new User(10, 'sasha', 'shos', 'fkjd', 12467533),
//     ]
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsersArray = users.filter( (item) => item.id % 2 ===0);
// console.log(filterUsersArray);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort) ---> я зробила по спаданню
// let sortUsersArray = users.sort((user1, user2) => user2.id - user1.id);
// console.log(sortUsersArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// };
// let clientArray = [
//     new Client(1, 'vasya', 'ivanov', 'apsps', 92839101, ['milk','tomatoes']),
//     new Client(2, 'oleg', 'olegov', 'dsdzaz', 345678, ['cucumber', 'bread', 'milk']),
//     new Client(3, 'nastya', 'batkivna', 'kvkd', 2345678, ['sparkling water']),
//     new Client(4, 'vika', 'stepanivna', 'alsmc', 1234567, ['noodles', 'water', 'tomatoes', 'toothpaste']),
//     new Client(5, 'vasya', 'lalala', 'sams', 234567, ['bread']),
//     new Client(6, 'marta', 'blabla', 'amksxls', 23476, ['snack', 'water']),
//     new Client(7, 'roman', 'ne_znayu', 'asmcals', 234689876, ['gum', 'milk', 'cucumber']),
//     new Client(8, 'nazar', 'nazarov', 'snkals', 24573585, ['apples', 'peach', 'melon', 'grape']),
//     new Client(9, 'sasha', 'jonson', 'akawq', 2356908764, ['oranges']),
//     new Client(10, 'sasha', 'shos', 'fkjd', 12467533, ['milk', 'sugar', 'eggs', 'apples', 'flour', 'cinnamon']),
//     ]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClientArray = clientArray.sort((client1, client2) => client1.order.length - client2.order.length);
// console.log(sortClientArray);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engineCapacity){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`
//         model - ${model},
//         producer - ${producer},
//         year - ${year},
//         maxSpeed - ${maxSpeed},
//         engineCapacity - ${engineCapacity}`)
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed = newSpeed
//
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
// }

// let car1 = new Car('i8', 'BMW', 2020, 300, 2.0 );
// console.log(car1);
// car1.info()
// car1.increaseMaxSpeed(350)
// car1.changeYear(2022)
// car1.addDriver({name: 'vasya', age: 31})
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//         }
//         this.info = function () {
//             console.log(`
//         model - ${model},
//         producer - ${producer},
//         year - ${year},
//         maxSpeed - ${maxSpeed},
//         engineCapacity - ${engineCapacity}`)
//         }
//         this.increaseMaxSpeed = function(newSpeed){
//             this.maxSpeed = newSpeed
//
//         }
//         this.changeYear = function (newValue){
//             this.year = newValue
//         }
//         this.addDriver = function (driver){
//             this.driver = driver
//         }
//     }
// }

// let car1 = new Car('i8', 'BMW', 2020, 300, 2.0 );
// console.log(car1);
// car1.info()
// car1.increaseMaxSpeed(350)
// car1.changeYear(2022)
// car1.addDriver({name: 'vasya', age: 31})
// console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let princess = [
    new Cinderella('Jasmine', 19, 39),
    new Cinderella('Ariel', 20, 'tail'),
    new Cinderella('Belle', 32, 38),
    new Cinderella('Tiana', 19, 39),
    new Cinderella('Aurora', 15, 24),
    new Cinderella('Cinderella', 18, 36),
    new Cinderella('Pocahontas', 27, 27),
    new Cinderella('Mulan', 45, 40),
    new Cinderella('Rapunzel', 19, 37),
    new Cinderella('Elsa', 23, 38),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
};
let prince = new Prince('Kit Charming', 30, 36);

    // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const girl of princess) {
//     if (girl.footSize === 36){
//         console.log(`His princess is ${girl.name}!`)
//     }
// };

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let findPrincess = princess.find((item) => {
//     if (item.footSize === prince.shoe){
//         console.log(`${prince.name}'s princess is ${item.name}!`)
//     }
// })