/* Variables */
const inputUser = document.querySelector('.name_user');
const btnUser = document.querySelector('.btn-game');
const formUser = document.querySelector('.login-form');

/* Input validation function */
const validateInput = ({ target }) => { // target = event destructuring
    if(target.value.length > 0) {
        btnUser.removeAttribute('disabled'); // if the input has 1 character or more it will enable the play button
    } else {
        btnUser.setAttribute('disabled', ''); // If it removes all characters, the button will be disabled again
    }
}

const handleSubmit = (event) => {
    event.preventDefault(); // Disables the website from automatically loading after the user clicks the button

    localStorage.setItem('player', inputUser.value); // will store the user name in brownser's memory with the player parameter
    window.location = '/assets/pages/game.html'; // will redirect the user to the game page
}

/* When accessing the input action... */
inputUser.addEventListener('input', validateInput);
formUser.addEventListener('submit', handleSubmit);