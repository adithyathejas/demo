var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event

form.addEventListener('submit',addItem);

//delete item
itemList.addEventListener('click',removeItem)

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

    var editButton = document.createElement('button');
    editButton.innerText = 'Edit'
    editButton.className  = 'btn btn-primary btn-sm float-right'

    deleteBtn.appendChild(document.createTextNode('x'));
   
    li.appendChild(deleteBtn);
    li.appendChild(editButton);
    
  
    itemList.appendChild(li);

  
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
if(confirm('are you sure ?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
}
    }
}