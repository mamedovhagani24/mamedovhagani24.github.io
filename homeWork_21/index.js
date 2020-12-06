const listGroup = document.querySelector(".list-group");
const addButton = document.querySelector("#addBtn");
const removeButton = document.querySelector("#removeBtn");

listGroup.addEventListener("click", activeListItems);
addButton.addEventListener("click", addItemToList);
removeButton.addEventListener("click", removeActiveItemFromList);

let choiseElement = null

function addItemToList() {
    let formInput = document.querySelector('#input')

    if (formInput.value === '') return

    const listItemsHTML = listGroup.innerHTML;
    const newListItem = `<li class="list-group-item">${formInput.value}</li>`

    listGroup.innerHTML = listItemsHTML + newListItem;

    formInput.value = "";
}


function activeListItems(e) {
    let currentElement = e.target


    if(choiseElement === currentElement) {
        classReplacement()

        choiseElement = null
    } else {
        classReplacement()

        choiseElement = currentElement

        choiseElement.classList.add('active')
    }
}

function classReplacement() {
    document.querySelector('.active')?.classList.remove('active');
}

function removeActiveItemFromList() {
    if(!choiseElement) return;

    choiseElement.remove()
    choiseElement = null
}