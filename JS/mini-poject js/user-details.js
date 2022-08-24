// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
let url1 = new URL(location.href)
let idUser = url1.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    .then(response => response.json())
    .then(user => {
        function newInfoBlock (item){
            for (const itemKey in item){
                if (typeof item[itemKey] !== 'object' ){
                    let p = document.createElement('p')
                    p.innerText = `${itemKey} : ${item[itemKey]} `
                    document.body.appendChild(p)
                } else {
                    newInfoBlock(item[itemKey])
                }
            }
        }
        newInfoBlock(user)
    })
let divForButton = document.getElementsByClassName('divForButton')[0]
let postsButton = document.createElement('button')
postsButton.classList.add('btn2')
postsButton.innerText = `Check details about posts`
divForButton.appendChild(postsButton)
postsButton.onclick = function (){
    let h2 = document.createElement('h2')
    h2.innerText = 'Title of posts'
    h2.classList.add('title')
    document.body.appendChild(h2)
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
        .then(response => response.json())
        .then(posts => {
            let titleList = document.createElement('ul')
            titleList.classList.add('ulDiv')
            for(const post of posts){
                let li = document.createElement('li')
                li.classList.add('postLi')
                li.innerText = post.title
                let postDetailButton = document.createElement('button')
                postDetailButton.classList.add('btn3')
                li.appendChild(postDetailButton)
                let a = document.createElement('a')
                a.innerText = 'Check more'
                a.href = `post-detail.html?id=${post.id}`
                postDetailButton.appendChild(a)
                titleList.appendChild(li)
            }
            document.body.appendChild(titleList)
        })
}
