document.addEventListener('DOMContentLoaded', () => {

    // Create Event Listeners

    const newStemForm = document.querySelector('#new-stem-form');
    newStemForm.addEventListener('submit', handleNewStemFormSubmit);


    // Add label for radio buttons
    const labelRadio = document.createElement("label");
    labelRadio.textContent = "Tick If Over 21?";

    // Add radio button to select status
    const radioButton = document.createElement('input');
    radioButton.setAttribute("type", "radio");
    radioButton.id = 'age';
    radioButton.value = labelRadio;

    // Attach the radio button to lableRadio
    labelRadio.appendChild(radioButton);
    
    // Creat link to place the new button
    const newFormItems = document.querySelector('#new-form-items');
    // Attach label and radio to form
    newFormItems.appendChild(labelRadio);


    // Add a 'delete all' button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete All";
    // Attach 'delete all' button to the (HTML) body tag - this will be added to the end.
    const bodyParent = document.querySelector('body');
    bodyParent.appendChild(deleteButton);


    // Listen for any events originating from the 'delete all' button.
    const deletePress = document.querySelector('button');
    deletePress.addEventListener('click', handleDeleteAllInput);


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

    let ageCheck = "is ";
    if (form.age.checked) {
        ageCheck += "over 21";
    } else {
        ageCheck += "not over 21";
    }



    // Interpolate data to insert into the list item
    stemListItem.textContent = `${firstName} ${lastName} specialises in ${speciality} and ${ageCheck}.`;

    return stemListItem;
}


// Handle 'delete all' events
const handleDeleteAllInput = function(){
    const deleter = document.getElementById("stem-list");
    // const deleter = document.querySelector('#stem-list');
    deleter.remove();
}