document.addEventListener('DOMContentLoaded', function() {
  // Get references to all buttons
  const createLobbyBtn = document.querySelector('.create-lobby');
  const joinGameBtn = document.querySelector('.join-game');
  const learnBtn = document.querySelector('.learn');
  const signInBtn = document.querySelector('.sign-in');
  const loginBtn = document.querySelector('.login');
  
  // Add click event listeners
  createLobbyBtn.addEventListener('click', function() {
    window.location.href = 'create-lobby.html';
  });
  
  joinGameBtn.addEventListener('click', function() {
    window.location.href = 'join-game.html';
  });
  
  learnBtn.addEventListener('click', function() {
    window.location.href = 'learn2play.html';
  });
  
  signInBtn.addEventListener('click', function() {
    window.location.href = 'sign-in.html';
  });
  
  loginBtn.addEventListener('click', function() {
    window.location.href = 'login.html';
  });
});