// // console.dir(document)
// // console.log(document.domain)
// // console.log(document.title)
// // document.title = "123"
// // console.log(document.doctype)

// //getElementbyID//

// /*
// var headerTitle = document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.style.borderBottom="solid 3px #000"

// var addItem = document.getElementById('items')
// addItem.style.fontWeight="Bold"
// addItem.style.color="green"
// */

// // var items = document.getElementsByClassName('list-group-item');

// // items[2].style.backgroundColor = "green"

// // for(let i=0;i<items.length;i++){
// //     items[i].style.fontWeight="bold"
// // }


// //tagName
// // var li = document.getElementsByTagName('li');

// // console.log(li)

// // li[1].textContent = "Hello 2";
// // li[1].style.fontWeight = "bold";
// // li[1].style.backgroundColor = 'yellow'

// // for(let i=0;i<li.length;i++){
// //      li[i].style.backgroundColor="#f4f4f4";
// //  }

// //QuerySelector//

// // var header = document.querySelector('#main-header');
// // header.getElementsByClassName.borderBottom = 'solid 4px #ccc'




// // var submit = document.querySelector('input[type="submit"]')
// // submit.value="send"


// // var item = document.querySelector('.list-group-item:nth-child(2)');
// // item.style.backgroundColor = 'green'

// // var item = document.querySelector('.list-group-item:nth-child(3)');
// // item.style.display = 'none'

// //querySelectorAll//

// var titles = document.querySelectorAll('.title')
// console.log(titles)

// // var li = document.querySelectorAll('li');
// // li[1].style.backgroundColor="green"

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green"
// }


var itemList = document.querySelector("#items");
console.log(itemList.parentNode)
console.log(itemlist.childnodes)
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "Hello4";
console.log(itemlist.lastElementChild)

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

