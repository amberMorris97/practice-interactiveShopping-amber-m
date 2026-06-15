let newItemInput = document.getElementById('newItem');
let shoppingList = document.getElementById('shoppingList');
let addItem = document.getElementById('add');

let newItem = '';
let editedItem = '';

const createBtn = (text) => {
    let btn = document.createElement('button');
    btn.innerText = text;
    btn.classList.add(text);

    return btn;
}

newItemInput.addEventListener('input', (event) => newItem = event.target.value);

addItem.addEventListener('click', () => {
    if (newItem === '') return;

    let editBtn = createBtn('edit');

    let deleteBtn = createBtn('delete');

    let newListItem = document.createElement('li');
    newListItem.append(newItem, ' ', editBtn, ' ', deleteBtn);

    shoppingList.appendChild(newListItem);
    newItemInput.value = '';
    newItem = '';
});

shoppingList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
        let saveBtn = createBtn('save');

        let tempInput = document.createElement('input');
        tempInput.value = event.target.parentElement.childNodes[0].textContent;

        let newLi = document.createElement('li');
        newLi.append(tempInput, ' ', saveBtn);
        event.target.parentElement.replaceWith(newLi);
    }

    if (event.target.classList.contains('save')) {
        if (event.target.parentElement.childNodes[0].value === '') return;

        let editBtn = createBtn('edit');

        let deleteBtn = createBtn('delete');


        editedItem = event.target.parentElement.childNodes[0].value;
        let newLi = document.createElement('li');
        newLi.append(editedItem, ' ', editBtn, ' ', deleteBtn);
      
        event.target.parentElement.replaceWith(newLi);
    }

    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});
