document.addEventListener('DOMContentLoaded', () => {

    // Create Event Listeners

    const newStemForm = document.querySelector('#new-stem-form');
    newStemForm.addEventListener('submit', handleNewStemFormSubmit);
});


// Create Event Handlers

const handleNewStemFormSubmit = function (event) {
    event.preventDefault(); 

    const stemListItem = createStemListItem(event.target);
    const stemList = document.querySelector('#stem-list');
    stemList.appendChild(stemListItem);

    event.target.reset();
}


const createStemListItem = function (form) {
    // Create the HTML list item (li) to attach to the HTML unordered lis (ul)
    const stemListItem = document.createElement('li');
    stemListItem.classList.add('stem-list-item');

    // Grab the data/values from the form
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const speciality = form.speciality.value;

    // Interpolate data to insert into the list item
    stemListItem.textContent = `${firstName} ${lastName} specialises in ${speciality}.`;

    return stemListItem;
}




//   // create new list item for each book
//   const newListItem = document.createElement('li');
//   newListItem.textContent = `Title: ${titleInput} Author: ${authorInput}
//                              Category: ${categoryInput}`;
//   const listParent = document.querySelector('#reading-list');

//   // attach the newly created list item to the unordered list
//   listParent.appendChild(newListItem);