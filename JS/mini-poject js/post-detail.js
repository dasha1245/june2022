//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href)
let idPost = url.searchParams.get('id')
let title1 = document.createElement('h3')
title1.innerText = 'Post details:'
document.body.appendChild(title1)
fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(response => response.json())
    .then(post => {
        for (const postKey in post) {
            let postInfo = document.createElement('div')
            let p = document.createElement('p')
            p.innerText = `${postKey}: ${post[postKey]}`
            postInfo.appendChild(p)
            document.body.appendChild(postInfo)
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
    .then (response => response.json())
    .then (comments => {
        let title2 = document.createElement('h3')
        title2.innerText = 'Comments:'
        let commentList = document.createElement('ul')
        commentList.classList.add('commentsListDiv')
        for (const comment of comments) {
            // for (const commentKey in comment) {
                let li = document.createElement('li')
            li.classList.add('commentLi')
                li.innerText = `${comment.email} ---- ${comment.body}`
                commentList.appendChild(li)
            // }
        }
        document.body.append(title2, commentList)
    })


