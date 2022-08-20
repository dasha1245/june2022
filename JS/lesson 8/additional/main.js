//Завдання те, що в текстовому варіанті перше.

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',

//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function User(id, name, username, email, street, suite, city, zipcode,lat, lng, phone, website, companyName, catchPhrase, bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.adress = {
//         street: street,
//         suite: suite,
//         city: city,
//         zipcode: zipcode,
//         geo:{
//             lat: lat,
//             lng: lng,
//         }
//     }
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         companyName: companyName, catchPhrase: catchPhrase, bs: bs,
//     }
//
// }

//Завдання те, що в пдф.

function userCard(number){
    function historyOperation (operationType, credits){
        let time = new Date().toLocaleTimeString();
        let day = new Date().toLocaleDateString();
        card.historyLogs.push({operationType, credits, operationTime:`${day}, ${time}` })
    }
    const card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }
    return {
        getCardOptions() {
            return card
        },
        putCredits(money){
            card.balance += money
            historyOperation('Receive money', money)
            return card.balance
        },
        takeCredits(money){
            if(card.balance >= money && card.transactionLimit >= money){
                card.balance -= money
                historyOperation('Spend money', money)
            } else {
                console.error(`You can't do it!`)
            }
            return card.balance
        },
        setTransactionLimit(sum){
            card.transactionLimit = sum
            return card.transactionLimit
        },
        transferCredits(money, newCard){
            let newSum = money + (money*0.5/100)
            if(card.balance >= newSum && card.transactionLimit>= newSum){
                card.balance -= newSum
                newCard.putCredits(money)
                historyOperation('Sent money to another client', money)
            } else{
                console.error(`You can't do it!`)
            }
            return card.balance
        }

    }

}
//
// const card3 = userCard(3);
// const newCard = userCard(1)
// card3.putCredits(150)
// card3.takeCredits(50)
// // card3.setTransactionLimit(30)
// newCard.putCredits(100)
// card3.transferCredits(50, newCard)
// console.log(card3.getCardOptions());
// console.log(newCard.getCardOptions());

function UserAccount (name){
    this.name = name;
    this.cards = [];
    this.addCard = function () {
        let numberOfCards = this.cards.length;
        if(numberOfCards+1 > 3){
            return console.error(`You have to have no more than 3 cards`)
        } else{
            this.cards.push(userCard(numberOfCards+1))
        }
    };
    this.getCardByKey = function (number){
        return this.cards[number-1].getCardOptions()
    }
}

let user1 = new UserAccount('Bob');
user1.addCard();
user1.addCard();




console.log(user1.cards);
console.log(user1.getCardByKey(1));
console.log(user1.getCardByKey(2));
console.log(user1.getCardByKey(3));







