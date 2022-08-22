// Additional lesson 8
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arr = [];
function findClasses (htmlElement){
    let children = htmlElement.children;
    if (children.length !== 0){
        for (const child of children) {
            if(child.classList.value) {
                arr.push(child.classList.value)
            }
            findClasses(child)
        }
    }
}
let div = document.getElementsByTagName('div')[1]
findClasses(div);
console.log(arr);


