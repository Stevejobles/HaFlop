
const headerButtons = document.querySelector('.header .buttons');
const createLobbyButton = headerButtons.querySelector('.button.create-lobby');
const loginButton = headerButtons.querySelector('.button.login');
const signupButton = headerButtons.querySelector('.button.signup');
const learnButton = headerButtons.querySelector('.button.learn-play')

function onCreateLobbyButtonClick() {
  console.log('test');

  loginButton.classList.add('big');
}

learnButton.addEventListener('click', function() {
  window.location.href = 
})

createLobbyButton.addEventListener('click', onCreateLobbyButtonClick);

/*
var hand1 = Hand.solve(['4d', '5s', '6c', '7h', '8d', '6d', '8h']);
var hand2 = Hand.solve(['4d', '5s', '6c', '7h', '8d', '7s', '8s']);
var winner = Hand.winners([hand1, hand2]); // hand2
*/

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