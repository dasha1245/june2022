// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let mainDiv = document.getElementsByClassName('main')[0]
            let eachUser = document.createElement('div')
            eachUser.classList.add('user', 'background', 'border')
            eachUser.innerText = `${user.id} ${user.name}`
            let eachUserBtn = document.createElement('button')
            eachUserBtn.classList.add('btn1')
            let a = document.createElement('a')
            a.href = `user-details.html?id=${user.id}`
            a.innerText = 'More details'
            mainDiv.appendChild(eachUser)
            eachUser.appendChild(eachUserBtn)
            eachUserBtn.appendChild(a)
        }

    })