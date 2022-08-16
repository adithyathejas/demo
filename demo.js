var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit',addItem);

//delete item
itemList.addEventListener('click',removeItem)

//filter item

filter.addEventListener('keyup',filterItems)


//Add Item 

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById("item").value;
    var desc = document.getElementById("description").value;
    var li = document.createElement('li');
    var dl = document.createElement('dl')
    dl.className='list-group-item description'
    dl.id= "desc"
    li.className= 'list-group-item';
    //add text node 
    li.appendChild(document.createTextNode(newItem));
    dl.appendChild(document.createTextNode(desc))
    li.appendChild(dl)

   

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

//filter functions
function filterItems(e){
    //convert text to lower
    var text = e.target.value.toLowerCase()
    var item = itemList.getElementsByTagName('li');
    var text2 = " "
    
    Array.from(item).forEach(item => {
        var itemName = item.firstChild.textContent
        var desc = item.getElementsByTagName('dl')
        // console.log("aaaaa",desc)
        if(desc.length != 0){
             text2 = desc[0].firstChild.textContent
            
        }
 
        if(itemName.toLowerCase().indexOf(text) != -1 || text2.toLowerCase().indexOf(text) != -1){
           
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none';
        }
     
        });

}
