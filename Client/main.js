
const headerButtons = document.querySelector('.header .buttons');
const createLobbyButton = headerButtons.querySelector('.button.create-lobby');
const loginButton = headerButtons.querySelector('.button.login');
const signupButton = headerButtons.querySelector('.button.signup');

function onCreateLobbyButtonClick() {
  console.log('test');
}

createLobbyButton.addEventListener('click', onCreateLobbyButtonClick);

/*

async function a() {

  const data = { username: "example" }

  const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify(data)
  })

  console.log("logged in!")

}

*/