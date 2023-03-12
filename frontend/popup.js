// popup.js file

// Get the start test form element
const startTestForm = document.getElementById("start-test-form");

// Get the admin and start test button element
const startButton = document.getElementById('start-test-button');
const adminButton = document.getElementById("admin-button");

// Get the close button element of the admin login popup
const adminLoginClose = document.getElementById("admin-close-button");

// Show the admin login popup when the admin button is clicked
adminButton.addEventListener("click", function () {

  // Hide the start test form
  startTestForm.style.display = "none";

  // Show the admin login popup
  openAdminLoginPopup.style.display = "block";

});

// Hide the admin login popup when the close button is clicked
adminLoginClose.addEventListener("click", function () {

  // Show the start test form
  startTestForm.style.display = "block";

  // Hide the admin login popup
  openAdminLoginPopup.style.display = "none";
});

// Handle the admin login form submission
const adminLoginForm = document.getElementById("admin-login-form");

// Listen for form submission event on the start test form
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get user inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const inviteCode = document.getElementById('invitation-code').value;

  // Create data object with user inputs
  const data = {
    name,
    email,
    inviteCode,
  };

  // Send POST request to server with user data and handle response
  const response = await fetch('http://localhost:8000/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.status >= 200 && response.status < 300) {
      chrome.windows.create({ url: "webcam.html", type: "popup", width: 400, height: 400 });
    }
    return response.json();
  }).then((data) => {
    console.log('Success:', data);
  }).catch((error) => {
    console.error('Error:', error);
  });
});

// Open the admin login popup in a new window when the admin login button is clicked
adminLoginButton.addEventListener("click", function () {
  chrome.windows.create({ url: "admin.html", type: "popup", width: 500, height: 500 });
});



