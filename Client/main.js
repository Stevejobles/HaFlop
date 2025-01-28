
const headerButtons = document.querySelector('.header .buttons');
const createLobbyButton = headerButtons.querySelector('.button.create-lobby');
const loginButton = headerButtons.querySelector('.button.login');
const signupButton = headerButtons.querySelector('.button.signup');

function onCreateLobbyButtonClick() {
  console.log('test');
}

createLobbyButton.addEventListener('click', onCreateLobbyButtonClick);