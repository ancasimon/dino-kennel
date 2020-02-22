const dinos = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i=0; i < dinoArray.length; i++) {
        domString += '<div class="col-4">';
        domString += '<div class="card">';
        domString += `<img class="card-img-top" src=${dinoArray[i].imageUrl} alt="Card image cap">`;
        domString += '<div class="card-body">';
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`;
        domString += `<p class="card-text">Health: ${dinoArray[i].health}</p>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    printToDom("kennel", domString);
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
    printDinos(dinos);
    console.log("Hello from newDino event listener function!", dinos);
};

// In the init function, we add the event listener for the click event - when user clicks the button with the submit-new-dino id, then the newDino function gets called. 
const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
};

init();
