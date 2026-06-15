let newItemInput = document.getElementById('newItem');
let shoppingList = document.getElementById('shoppingList');
let addItem = document.getElementById('add');

let newItem = '';
let editedItem = '';

newItemInput.addEventListener('input', (event) => newItem = event.target.value);

addItem.addEventListener('click', () => {
    if (newItem === '') return;
    
    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.classList.add('edit');

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete';
    deleteBtn.classList.add('delete');

    let newListItem = document.createElement('li');
    newListItem.append(newItem, ' ', editBtn, ' ', deleteBtn);

    shoppingList.appendChild(newListItem);
    newItemInput.value = '';
    newItem = '';
});

shoppingList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
        let saveBtn = document.createElement('button');
        saveBtn.innerText = 'save';
        saveBtn.classList.add('save');

        let tempInput = document.createElement('input');
        tempInput.value = event.target.parentElement.childNodes[0].textContent;

        let newLi = document.createElement('li');
        newLi.append(tempInput, ' ', saveBtn);
        event.target.parentElement.replaceWith(newLi);
    }

    if (event.target.classList.contains('save')) {
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit';

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        deleteBtn.classList.add('delete');


        editedItem = event.target.parentElement.childNodes[0].value;
        let newLi = document.createElement('li');
        newLi.append(editedItem, ' ', editBtn, ' ', deleteBtn);
      
        event.target.parentElement.replaceWith(newLi);
    }

    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});
