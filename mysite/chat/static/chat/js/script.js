const usernameInput1 = document.getElementById('username_login');
const usernameContainer = document.getElementById('username-container');
const mainContent = document.getElementById('main-content');
const labelUsername = document.getElementById('label-username');

btnJoin.addEventListener('click', function() {
    // Code to execute when the button is clicked
    const username = usernameInput1.value.trim(); // Trim whitespace
  if (username) {
    labelUsername.textContent = username; // Update displayed username
    usernameContainer.style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    usernameContainer.style.display = 'block';
    mainContent.style.display = 'none';
  }
  });

// // if (mainContent.style.display === 'none') {
// //     document.body.style.fontFamily = 'sans-serif';
// //     document.body.style.display = 'flex';
// //     document.body.style.justifyContent = 'center';
// //     document.body.style.alignItems = 'center';
// //     document.body.style.height = '100vh';
// //     document.body.style.backgroundColor = '#f5f5f5'
// //     // document.body.style.backgroundColor = 'red';
// // }