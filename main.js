const dinos = [];

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
    console.log("Hello from newDino event listener function!", dinos);
};

// In the init function, we add the event listener for the click event - when user clicks the button with the submit-new-dino id, then the newDino function gets called. 
const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
};

init();
