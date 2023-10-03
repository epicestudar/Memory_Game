/* Variables */
const gridGame = document.querySelector('.grid-game');

/* Functions */
const createElement = (tag, className) => { // method, parameter
    const element = document.createElement(tag); // calling the method
    element.className = className; // calling the parameter
    return element;
}

const createCard = () => {
    const cardGame = document.createElement('div', 'card-game'); // calling tag and class
    const frontCard = document.createElement('div', 'face front'); // creating element
    const backCard = document.createElement('div', 'face back'); // creating element

    cardGame.appendChild(frontCard); // this command adds "children" inside the main div we created
    cardGame.appendChild(backCard); // this command adds "children" inside the main div we created
    
    return cardGame;
}

createCard();