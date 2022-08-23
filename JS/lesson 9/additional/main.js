// Additional lesson 8
// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arr = [];
function findClasses (element){
    if (element.className){
        for (const classElement of element.className.split(' ')){
            arr.push(classElement)
        }
    }
    let children = element.children;
    if (children.length){
        for (const child of children) {
            findClasses(child)
        }
    }
}
let div = document.getElementsByTagName('div')[1]
findClasses(div);
console.log(arr);


