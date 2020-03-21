const dinos = [
    {
        id: 'dino1',
        name: 'Annie',
        type: 'Ankylosaurus',
        pronunciation: 'ang-KILE-uh-SAWR-us',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 99,
        image: 'dino-kennel-images/Annie.jpeg',
        alt: 'Picture of an Ankylosaurus',
        description: 'Ankylosaurus was covered with bony plates of armor and had a dangerous clubbed tail that it could swing to infect severe injury on its predators.',
        isCarnivorous: false
      },
      {
        id: 'dino2',
        name: 'Brach',
        type: 'Brachiosaurus',
        pronunciation: 'BRAK-e-o-SAWR-us',
        age: 100,
        owner: 'Luke',
        adventures: [],
        health: 1,
        image: 'dino-kennel-images/Brach.jpeg',
        alt: 'Picture of a Brachiosaurus',
        description: 'This plant-eating dinosaur was one of the largest animals known to have walked the earth. Standing up to 50 feet tall, its neck was 6 times longer than a giraffe\'s.',
        isCarnivorous: false
      },
      {
        id: 'dino3',
        name: 'Flipper',
        type: 'Pleisiosaurus',
        pronunciation: 'PLEE-see-uh-SAWR-us',
        age: 50,
        owner: 'Mary',
        adventures: [],
        health: 45,
        image: 'dino-kennel-images/Flipper.jpeg',
        alt: 'Picture of a Pleisiosaurus',
        description: 'This marine dinosaur had 4 wide flippers that propelled it through the water with ease. Its wide jaws and razor-sharp teeth allowed it to catch its prey just as easily.',
        isCarnivorous: true
      },
      {
        id: 'dino4',
        name: 'Lizzie',
        type: 'Tyrannosaurus',
        pronunciation: 'tye-RAN-uh-SAWR-us',
        age: 55,
        owner: 'Anca',
        adventures: [
            {
                title: "Archery",
                date: "March 1, 2020"
            },
            {
                title: "Swimming",
                date: "March 8, 2020"
            },
            {
                title: "Underwater digging",
                date: "March 9, 2020"
            }
        ],
        health: 70,
        image: 'dino-kennel-images/Lizzie.jpeg',
        alt: 'Picture of a Tyrannosaurus',
        description: 'Earning its name, which means \"tyrant lizzard king\", Tyrannosaurus Rex had a massive skull with powerful jaws able to eat up to 500 pounds of meat and bones in just one bite. This popular prehistoric predator can also be distinguished by its huge legs and small arms.',
        isCarnivorous: true
      },
      {
        id: 'dino5',
        name: 'Perry',
        type: 'Parasaurolophus',
        pronunciation: 'par-ah-SAWR-OL-uh-fus',
        age: 20,
        owner: 'Greg',
        adventures: [
            {
                title: "Cave exploration",
                date: "February 22, 2020"
            },
            {
                title: "Swimming",
                date: "March 5, 2020"
            },
            {
                title: "Archery",
                date: "March 9, 2020"
            }
        ],
        health: 5,
        image: 'dino-kennel-images/Perry.jpeg',
        alt: 'Picture of a Parasaurolophus',
        description: 'The large crest on its head is an identifying characteristic of the Parasaurolophus. It is believed this crest helped the dinosaur hear and regulate its body temperature.',
        isCarnivorous: false
      }, 
      {
        id: 'dino6',
        name: 'Punk',
        type: 'Stegosaurus',
        pronunciation: 'STEG-uh-SAWR-us',
        age: 10,
        owner: 'Zoe',
        adventures: [],
        health: 0,
        image: 'dino-kennel-images/Punk.jpeg',
        alt: 'Picture of a Stegosaurus',
        description: 'Stegosaurus is distinguished by the double row of large triangular plates along its back and the four long spikes on its tail. Some scientists believe the plates worked like solar panels to provide the Stegosaurus with body heat.',
        isCarnivorous: false
      },
      {
        id: 'dino7',
        name: 'Spiney',
        type: 'Spinosaurus',
        pronunciation: 'SPY-nuh-SAWR-us',
        age: 76,
        owner: 'Luke',
        adventures: [],
        health: 0,
        image: 'dino-kennel-images/Spiney.jpeg',
        alt: 'Picture of a Spinosaurus',
        description: 'The Spinosaurus is easily identified by the giant sail on its back. It gets its name, which means \"spine lizzard\", from the up to 7-feet spines that make up this sail.',
        isCarnivorous: true
      },
      {
        id: 'dino8',
        name: 'Walker',
        type: 'Hypacrosaurus',
        pronunciation: 'hye-PACK-ruh-SAWR-us',
        age: 47,
        owner: 'Anca',
        adventures: [
          {
            title: "Cave exploration",
            date: "February 1, 2020"
        },
        {
            title: "Archery",
            date: "March 1, 2020"
        },
        {
            title: "Archery",
            date: "March 10, 2020"
        }
        ],
        health: 30,
        image: 'dino-kennel-images/Walker.jpeg',
        alt: 'Picture of a Hypacrosaurus',
        description: 'Thsi upright-walking dinosaur is distinguished by the crest on its head and row of spines along its back.',
        isCarnivorous: false
      }
];

const adventures = [
    {
      id: 'adventure1',
      title: 'Archery',
      healthHit: 50
    },
    {
      id: 'adventure2',
      title: 'Baking',
      healthHit: 2
    },
    {
      id: 'adventure3',
      title: 'Brawling',
      healthHit: 25
    },
    {
      id: 'adventure4',
      title: 'Caving',
      healthHit: 20
    },
    {
      id: 'adventure5',
      title: 'Chasing unicorns',
      healthHit: 15
    },
    {
      id: 'adventure6',
      title: 'Digging underwater',
      healthHit: 10
    },
    {
      id: 'adventure7',
      title: 'Fishing',
      healthHit: 7
    },
    {
      id: 'adventure8',
      title: 'Hiking',
      healthHit: 1
    },
    {
      id: 'adventure9',
      title: 'Playing in traffic',
      healthHit: 23
    },
    {
      id: 'adventure10',
      title: 'Swimming',
      healthHit: 50
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

const adventureTableBuilder = (advArray) => {
  let domString = '';
  domString += '<table class="table">';
  domString += '<thead class="thead=light">';
  domString += '<tr>';
  domString += '<th scope="col">#</th>';
  domString += '<th scope="col">Date</th>';
  domString += '<th scope="col">Type</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  for (let i=0; i < advArray.length; i++) {
      domString += '<tr>';
      domString += `<th scope="row">${i+1}</th>`;
      domString += `<td>${moment(advArray[i].date).format('MMMM Do YYYY, h:mm:ss a')}</td>`;
      domString += `<td>${advArray[i].title}</td>`;
      domString += '</tr>';
  }
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};


const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id);
    let domString = '';
    domString += '<div class="container d-inline-block text-right">';
    domString += '<button id="close-single-view" type="button" class="btn btn-dark"><i class="fas fa-window-close"></i></button>';
    domString += '</div>';
    domString += '<div class="container">';
    domString +=    '<div class="row">';
    domString +=        '<div class="col-md-4">';
    domString +=            `<img class="img-fluid vh-25" style="width: 250px;" src="${selectedDino.image}" alt="${selectedDino.alt}"></img>`;
    domString +=        '</div>';
    domString +=        '<div class="col-md-4">';
    domString +=            `<h2>Name: ${selectedDino.name}</h2>`;
    if (selectedDino.isCarnivorous === true) {
      domString +=            '<p><i class="fas fa-drumstick-bite larger"></i></p>';
    } else {
      domString +=            '<p><i class="fas fa-carrot larger"></i></p>';
    }
    domString +=            `<p>Age: ${selectedDino.age}</p>`;
    domString +=            `<p>Type: ${selectedDino.type}</p>`;
    domString +=            `<p>(that is, "${selectedDino.pronunciation}")</p>`;
    domString +=            `<p>${selectedDino.description}</p>`;
    domString +=            `<p>Owner: ${selectedDino.owner}</p>`;
    domString +=            printProgress(selectedDino, selectedDino.health < 1 ? 'graveyard' : 'single-view');
    domString +=        '</div>';
    domString +=        '<div class="col-md-4">';
    domString +=          '<h3>See what your pet dino\'s been up to\!</h3>';
    domString +=          adventureTableBuilder(selectedDino.adventures);
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
    if (dinos[dinoPosition].health < 100 && dinos[dinoPosition].health !== 0) {
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

const deleteEvents = (divId) => {
  if (divId !== 'graveyard') { 
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for (let i=0; i <dinoDeleteButtons.length; i++) {
        dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
    }
  }
};

const feedMe = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health < 90 && dinos[dinoPosition].health !== 0) {
        dinos[dinoPosition].health += 10;
        buildAllDinos(dinos);
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health <100) {
        dinos[dinoPosition].health = 100;
        buildAllDinos(dinos);
    }
};


const feedEvents = (divId) => {
  if (divId !== 'graveyard') { 
    const dinoFeedButtons = document.getElementsByClassName('feed-dino');
    for (let i = 0; i < dinoFeedButtons.length; i++) {
        dinoFeedButtons[i].addEventListener('click', feedMe);
    }
  }
};

const addAdventure = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition = dinos.findIndex((thisDino) => thisDino.id === dinoId);
  const randomAdvIndex = Math.floor(Math.random()*adventures.length);
  const newAdventure = {
      title: adventures[randomAdvIndex].title,
      date: Date.now()
  };
  dinos[dinoPosition].adventures.push(newAdventure);
  dinos[dinoPosition].health -= adventures[randomAdvIndex].healthHit;
  buildAllDinos(dinos);
};

const advEvents = (divId) => {
  if (divId !== 'graveyard') { 
  const advButtons = document.getElementsByClassName('adv-button');
  for (let i=0; i<advButtons.length; i++) {
      advButtons[i].addEventListener('click', addAdventure);
  }
}
};

const printProgress = (dino, divId) => {
  let domString = '';
  if (divId !== 'graveyard') {
    domString += '<div class="progress" style="height: 30px;">';
    domString += `<div class="progress-bar progress-bar-striped ${dino.health < 40 ? 'bg-danger' : 'bg-success'}" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">Health: ${dino.health}%</div>`;
    domString += '</div>';
  } else {
    domString += '<div><i class="fas fa-skull-crossbones fa-3x"></i></div>';
  }

  return domString
}

const printButtons = (divId) => {
  let domString = '';
  domString += '<div class="row">';
  domString += '<div class="col-6"><button type="button" class="col-12 m-1 btn btn-primary single-dino"><i class="fas fa-binoculars"></i></button></div>';
  domString += `<div class="col-6"><button type="button" class="col-12 m-1 btn btn-success feed-dino ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-hamburger"></i></button></div>`;
  domString += `<div class="col-6"><button type="button" class="col-12 m-1 btn btn-warning text-white adv-button ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-hiking"></i></button></div>`;
  domString += `<div class="col-6"><button type="button" class="col-12 m-1 btn btn-dark delete-dino ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-trash-alt"></i></button></div>`;
  domString += '</div>';
  return domString;
};

const printDinos = (dinoArray, divId) => {
    let domString = '';
    if (divId==='kennel') {
      domString += '<div class="container kennel">';
      domString += '<h6 class="section-header">Here are our friends who are doing great:</h6>';
      domString += '<div class="d-flex flex-wrap">';
    } else if (divId==='hospital') {
      domString += '<div class="container hospital">';
      domString += '<h6 class="section-header">Here are our friends who need some TLC:</h6>';
      domString += '<div class="d-flex flex-wrap">';
    } else if (divId==='graveyard') {
      domString += '<div class="container graveyard">';
      domString += '<h6 class="section-header">Here are our friends whom we miss dearly:</h6>';
      domString += '<div class="d-flex flex-wrap">';
    };
    for (let i=0; i < dinoArray.length; i++) {
        domString += '<div class="col-md-4">';
        domString += `<div id="${dinoArray[i].id}" class="card border-dark mb-3">`;
        domString += `<img class="card-img-top dino-photo vh-25% mx-auto mt-2 picture" style="width: 250px;" src="${dinoArray[i].image}" alt="${dinoArray[i].alt}">`;
        domString += '<div class="card-body">';
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`;
        domString += printProgress(dinoArray[i], divId);
        domString += printButtons(divId);
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    domString += '</div>';
    printToDom(divId, domString);
};

const addEvents = () => {
  singleDinoAddEvents();
  petEvents();
  deleteEvents();
  feedEvents();
  advEvents();
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

// const hospitalDomStringBuilder = (dinoArray) => {
//     let domString = '';
//     for (let i = 0; i < dinoArray.length; i++) {
//         domString += '<div class="col-4">';
//         domString += `<div id="${dinoArray[i].id}" class="card">`;
//         domString += `<img class="card-img-top dino-photo" src=${dinoArray[i].image} alt="${dinoArray[i].alt}">`;
//         domString += '<div class="card-body">';
//         domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`;
//         domString += `<p class="card-text">Health: ${dinoArray[i].health}</p>`;
//         domString += '<div class="progress">';
//         domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100">`;
//         domString += '</div>';
//         domString += '</div>';
//         domString += '<button class="btn btn-primary single-dino"><i class="fas fa-binoculars"></i></button>';
//         domString += '<button type="button" class="btn btn-success feed-dino"><i class="fas fa-hamburger"></i></button>';
//         domString += '<button class="btn btn-warning text-white adv-button"><i class="fas fa-hiking"></i></button>';
//         domString += '<button type="button" class="btn btn-dark delete-dino"><i class="fas fa-trash-alt"></i></button>';
//         domString += '</div>';
//         domString += '</div>';
//         domString += '</div>';
//         };
//     printToDom('hospital', domString);
//     singleDinoAddEvents();
//     petEvents();
//     deleteEvents();
//     feedEvents();
//     advEvents();
// };
// DELETING the old function to build the graveyard section beacuse we replaced it with the print dinos funciton - to which we added a second parameter of a divId so that it can print various collections of dinos (live, sick, dead) to one ofthe 3 divs in index (kennel, hospital, graveyard). -- SAME WIHT HOSPITAL builder funciton above.
// const graveyardDomStringBuilder = (dinoArray) => {
//   let domString = '';
//   for (let i=0; i < dinoArray.length; i++) {
//       domString += '<div class="col-4">';
//       domString += `<div id="${dinoArray[i].id}" class="card">`;
//       domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].image}" alt="${dinoArray[i].alt}">`;
//       domString += '<div class="card-body">';
//       domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
//       domString += '<div><i class="fas fa-skull-crossbones"></i></div>';
//       domString += '</div>';
//       domString += '</div>';
//       domString += '</div>';
//   }
//   printToDom('graveyard', domString);
//   singleDinoAddEvents();
// };


const newDino = () => {
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
    printDinos(hospitalDinos, 'hospital');
};

const findGraveyardDinos = (dinos) => {
  const deadDinos = dinos.filter((thisDino) => thisDino.health < 1);
  printDinos(deadDinos, 'graveyard');
};

const findLiveHealthyDinos = (dinos) => {
  const liveDinos = dinos.filter((thisDino) => thisDino.health > 39);
  printDinos(liveDinos, 'kennel');
};

const clearAllDinos = () => {
    printToDom('kennel', '');
    printToDom('hospital','');
    printToDom('graveyard', '');
    $('#filters').addClass('hide');
};

const buildAllDinos = () => {
    findLiveHealthyDinos(dinos);
    findHospitalDinos(dinos);
    findGraveyardDinos(dinos);
    addEvents();
};

const onlyByOwner = (e) => {
  const owner = e.target.id;
  const groupOfDinos = dinos.filter((thisDino) => thisDino.owner === owner);

  // for (let i=0; i < dinos.length; i++) {
  //     if (dinos[i].owner === owner) {
  //         groupOfDinos.push(dinos[i]);
  //     }
  // };
  buildAllDinos(groupOfDinos);
};

const onlyByAdventure = (adventure) => {
  const groupOfDinos = [];
  for (let i=0; i < dinos.length; i++) {
      if (dinos[i].adventures.includes ('Archery')) {
          groupOfDinos.push(dinos[i]);
      };
  };
  buildAllDinos(groupOfDinos);
};

const events = () => {
  $('.owner').click(onlyByOwner);
  // document.getElementsByClassName('adv').addEventListener('click', onlyByAdventure);
}; 

// console.log(onlyByOwner('Anca'));


const alertNewDinoValidation = () => {
  $('#newDinoModal').modal('show');
};

const submitEvent = (event) => {
  event.preventDefault();
  if (document.getElementById('dino-name').value !== '') {
    newDino();
    } else {
      alertNewDinoValidation();
    } 
};



// In the init function, we add the event listener for the click event - when user clicks the button with the submit-new-dino id, then the newDino function gets called. 
const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', submitEvent);
  buildAllDinos();
  events();
};

init();
