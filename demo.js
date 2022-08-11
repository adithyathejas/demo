console.dir(document)
console.log(document.domain)
console.log(document.title)
document.title = "123"
console.log(document.doctype)

//getElementbyID//

var headerTitle = document.getElementById('header-title')
console.log(headerTitle);
headerTitle.style.borderBottom="solid 3px #000"
