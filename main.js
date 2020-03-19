const dinos = [
    {
        id: 'dino1',
        name: 'Annie',
        type: 'Ankylosaurus',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 99,
        image: 'dino-kennel-images/Annie.jpeg'
      },
      {
        id: 'dino2',
        name: 'Brach',
        type: 'Brachiosaurus',
        age: 100,
        owner: 'Luke',
        adventures: [],
        health: 1,
        image: 'dino-kennel-images/Brach.jpeg'
      },
      {
        id: 'dino3',
        name: 'Flipper',
        type: 'Pleisiosaurus',
        age: 50,
        owner: 'Mary',
        adventures: [],
        health: 45,
        image: 'dino-kennel-images/Flipper.jpeg'
      },
      {
        id: 'dino4',
        name: 'Lizzie',
        type: 'Tyrannaosaurus',
        age: 55,
        owner: 'Anca',
        adventures: [],
        health: 0,
        image: 'dino-kennel-images/Lizzie.jpeg'
      },
      {
        id: 'dino5',
        name: 'Perry',
        type: 'Parasaurolophus',
        age: 20,
        owner: 'Greg',
        adventures: [],
        health: 5,
        image: 'dino-kennel-images/Perry.jpeg'
      }, 
      {
        id: 'dino6',
        name: 'Punk',
        type: 'Stegosaurus',
        age: 10,
        owner: 'Zoe',
        adventures: [],
        health: 10,
        image: 'dino-kennel-images/Punk.jpeg'
      },
      {
        id: 'dino7',
        name: 'Spiney',
        type: 'Spinosaurus',
        age: 76,
        owner: 'Luke',
        adventures: [],
        health: 80,
        image: 'dino-kennel-images/Spiney.jpeg'
      },
      {
        id: 'dino8',
        name: 'Walker',
        type: 'Hypacrosaurus',
        age: 47,
        owner: 'Anca',
        adventures: [],
        health: 100,
        image: 'dino-kennel-images/Walker.jpeg'
      }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// No - we start defining the single view: When you click the View/eye button on the all dinos page (we assign the same class to all these buttons and then add an event to all of them in the main initial printDionos function's domString - when clicked, they run the viewSingleDino function), then the kennel is emptied/an empty string gets pushed to the div with the 'kennel' id and a new printToDom function runs that creates the single dino view - see the viewSingleDino function. Then we also associate a close function (closeSingleViewEvent) with the Close/X button we have have added to the single View. 

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    buildAllDinos(dinos);
};


// Now - we want to add a way to see the single dino:
//  - when I click the View/eye button, I want to grab the ID of the parent card - I can do that by using the .closest method and asking it to pull the id of the parent with a class of card(.card) who is closest to my target element - so e.target gives me the target element I clicked on (in our case, the View/eye button; .closest is th emethod looking fo rth enext thing up in the tree of this element; ('.card) tells it that what I am looking for is a parent with a class of card; id then tells it ti pull the id of that parent): 
// To make all this Worker, I had to give the parent card the unique ID of each dino - see the item in the printDinos domString that does that by using the ${dinoArray[i].id}!
// .find and other array methods - do a for loop over the dinos array until they meet a condition (specified in the curly brackets/or the second part of the equation (if you use curly brackets, you need to specify "return"  at the beginninginside the curly brackets), afetr the => arrow - the dino id taht I am currently on is the same as the id of a dino in the array): - this is what the find array mnethod does:
// const find = () => {
//     for (let i= 0; i < dinos.length; i++) {
//         if(dinoId === dinos[i].id) {
//             return dinos[i];
//         }
//     };
// };
// In the actual find array method used below, what goes in the parentheses is the equivalent of the dinos[i].id; so that takes you to this: dinos.find((currentDino) => dinoId === currentDino.id);
// Note that sometimes people don't rename the variable and just use x instead: dinos.find((x) => dinoId === x.id);



const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id);
    console.log(selectedDino);
    let domString = '';
    domString += '<button id="close-single-view" type="button" class="btn btn-outline-dark"><i class="fas fa-window-close"></i></button>';
    domString += '<div class="container">';
    domString +=    '<div class="row">';
    domString +=        '<div class="col-6">';
    domString +=            `<img class="img-fluid" src="${selectedDino.image}" alt="dinosaur picture"></img>`;
    domString +=        '</div>';
    domString +=        '<div class="col-6">';
    domString +=            `<h2>Name: ${selectedDino.name}</h2>`;
    domString +=            `<p>Age: ${selectedDino.age}</p>`;
    domString +=            `<p>Type: ${selectedDino.type}</p>`;
    domString +=            `<p>Owner: ${selectedDino.owner}</p>`;
    domString +=            `<p>Health: </p>`;
    domString +=            '<div class="progress">';
    domString +=            `<div class="progress-bar bg-danger" role="progressbar" style="width: ${selectedDino.health}%" aria-valuenow="${selectedDino.health}" aria-valuemin="0" aria-valuemax="100">`;
    domString +=            '</div>';
    domString +=            '</div>';
    domString +=        '</div>';
    domString +=    '</div>';
    domString += '</div>';
    clearAllDinos();
    printToDom('single-view', domString);
    document.getElementById("close-single-view").addEventListener('click', closeSingleViewEvent);
};

const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (let i=0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    };
};

// // The feature to increase the dino's health every time you pet him  requires:
// 1- an event listener thatr is similar to the view single dino event listener - see petEvents below; 
// 2 - that you use the .closest method that we used earlier in viewSingleDino to get the parent card ID
// 3 - findIndex to find the index of the selected dino object in the array in order to know which dino's health score we should increase - then you can say dinos[dinoPosition].health = which means that the health value of the dino object in the position specified in the squre brackets.

const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health < 100) {
        dinos[dinoPosition].health += 1;
        buildAllDinos(dinos);
        };
    };


const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i=0; i < dinoPetButtons.length; i++) {
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    };
};

// This is the function that will delete the dino:
// 1 - it takes a parameter of the event that is taking place on the page and the it looks for the target of that event and then for the closest parent with a class of a card ('.card); 
// 2 - Then, once it has the card's id, it uses the findIndex method to identify the position (in he array) of the dino that has the same exact id as the card we just identified (that contains the button that was the target of the event);
// 3 - then it removes that dino from the array using the splice method: first, it specified what position to start removing an ID from (the position identified by the dinoPosition variable) and then it specifies the method should remove only 1 item from the array.
// 4 - then it finally calls the printDinos funciton to print the whole array again - minus the one dino that was removed!! 
// 5- we will also add this deleteDinoEvent function to the printDinos funciton so that it gets built into the array when the list of dinos (including the delete buttons) get built!

const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    dinos.splice(dinoPosition, 1);
    buildAllDinos(dinos); 
};

// To know which dino to delete with the delete function above, we need to add event listeners to the delete buttons on each dino card so that we can then use the action of clicking the Delete button as an event (and thus be able to identify the target of the event and then the parent with the card class and then get that id!!). Once the dino is found, this will trigger the deleteDInoEvent funciton above!!! This is what the findDinoToDelete function below does!

const deleteEvents = () => {
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for (let i=0; i <dinoDeleteButtons.length; i++) {
        dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
    }
};

const feedMe = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health < 90) {
        dinos[dinoPosition].health += 10;
        buildAllDinos(dinos);
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health <100) {
        dinos[dinoPosition].health = 100;
        buildAllDinos(dinos);
    }
};


const feedEvents = () => {
    const dinoFeedButtons = document.getElementsByClassName('feed-dino');
    for (let i = 0; i < dinoFeedButtons.length; i++) {
        dinoFeedButtons[i].addEventListener('click', feedMe);
    }
};

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i=0; i < dinoArray.length; i++) {
        domString += '<div class="col-4">';
        domString += `<div id="${dinoArray[i].id}" class="card">`;
        domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].image}" alt="dinosaur pic">`;
        domString += '<div class="card-body">';
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`;
        domString += `<p class="card-text">Health:</p>`;
        domString += '<div class="progress">';
        domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100">`;
        domString += '</div>';
        domString += '</div>';
        domString += '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
        domString += '<button type="button" class="btn btn-success feed-dino"><i class="fas fa-hamburger"></i></button>';
        domString += '<button type="button" class="btn btn-dark delete-dino"><i class="fas fa-trash-alt"></i></button>';
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    printToDom("kennel", domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
};



// When the form gets submitted, we want to clear the form as well as collapse the form under the Add Dino button. 

// 1 - To CLEAR the form: We will use the reset method - see below; otherwise - the old way was that you could create a function to clear the form once data // has been submitted:
// const clearNewDinoForm = () => {
//     document.getElementById('dino-name').value = '',
//     document.getElementById('dino-type').value = '',
//     document.getElementById('dino-age').value = '',
//     document.getElementById('dino-owner').value = '',
//     document.getElementById('dino-image').value = ''
// };

// 2 - To COLLAPSE the form, we want to remove the "show" class that gets added automatically by default by Bootstrap when the Add Dino button is clicked/when the accordion gets expanded! We will do this then: document.getElementById('collapseOne').classlist.remove('show');
// We will add it to the newDino function because it is not something that will be reused so it does not need its own function. 

// The newDino function prevents the default browser behavior after any event that calls this function (WILL NEED TO USE THISD WITH MOST FORM TO PREVENT DEFAULT REFRESH BEHAVIOR), AND then creates a brandNewDino object (usign the values entered in the form input fields and their unique ids), AND then pushes the brandNewDino into the dinos array we defined earlier.

const hospitalDomStringBuilder = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++) {
        domString += '<div class="col-4">';
        domString += `<div id="${dinoArray[i].id}" class="card">`;
        domString += `<img class="card-img-top dino-photo" src=${dinoArray[i].image} alt="Card image cap">`;
        domString += '<div class="card-body">';
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`;
        domString += `<p class="card-text">Health:</p>`;
        domString += '<div class="progress">';
        domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100">`;
        domString += '</div>';
        domString += '</div>';
        domString += '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
        domString += '<button type="button" class="btn btn-success feed-dino"><i class="fas fa-hamburger"></i></button>';
        domString += '<button type="button" class="btn btn-dark delete-dino"><i class="fas fa-trash-alt"></i></button>';
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
        };
    printToDom('hospital', domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
};

const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dino${dinos.length+1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value
    };
    dinos.push(brandNewDino);
    // clearNewDinoForm();
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    buildAllDinos();
};

const findHospitalDinos = (dinos) => {
    const hospitalDinos = dinos.filter((x) => x.health > 0 && x.health < 40);
    hospitalDomStringBuilder(hospitalDinos);
};

const clearAllDinos = () => {
    printToDom('kennel', '');
    printToDom('hospital','');
};

const buildAllDinos = () => {
    printDinos(dinos);
    findHospitalDinos(dinos);
};

// In the init function, we add the event listener for the click event - when user clicks the button with the submit-new-dino id, then the newDino function gets called. 
const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    buildAllDinos();
};

init();
