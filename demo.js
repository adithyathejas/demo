var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event

form.addEventListener('submit',addItem);

//Add Item 

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById("item").value;

    var li = document.createElement('li');
    li.className= 'list-group-item';
    //add text node 
    li.appendChild(document.createTextNode(newItem));

   

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"

    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
  
    itemList.appendChild(li);
