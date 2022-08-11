// console.dir(document)
// console.log(document.domain)
// console.log(document.title)
// document.title = "123"
// console.log(document.doctype)

//getElementbyID//

/*
var headerTitle = document.getElementById('header-title')
console.log(headerTitle);
headerTitle.style.borderBottom="solid 3px #000"

var addItem = document.getElementById('items')
addItem.style.fontWeight="Bold"
addItem.style.color="green"
*/

// var items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor = "green"

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }


//tagName
var li = document.getElementsByTagName('li');

console.log(li)

li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = 'yellow'

for(let i=0;i<li.length;i++){
     li[i].style.backgroundColor="#f4f4f4";
 }