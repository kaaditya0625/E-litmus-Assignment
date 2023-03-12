
// popup.js file
const form = document.getElementById('start-test-form');
const openAdminLoginPopup = document.getElementById("admin-login-popup");
const userLoginPopup = document.getElementById("user-login-popup");
const adminLoginButton = document.getElementById("admin-login-button");

// Get the admin and start test button element
const startButton = document.getElementById('start-test-button');
const adminButton = document.getElementById("admin-button");

// Get the close button element of the admin login popup
const adminLoginClose = openAdminLoginPopup.querySelector("#admin-close-button");

// Get the start test form element
const startTestForm = document.getElementById("start-test-form");

// Show the admin login popup when the admin button is clicked
adminButton.addEventListener("click", function() {
  console.log("admin button clicked");
  // Hide the start test form
  startTestForm.style.display = "none";

  // Show the admin login popup
  openAdminLoginPopup.style.display = "block";

  // window.open("admin.html", "Admin Window", "width=800,height=600");
});

// Hide the admin login popup when the close button is clicked
adminLoginClose.addEventListener("click", function() {
  // Show the start test form
  startTestForm.style.display = "block";

  // Hide the admin login popup
  openAdminLoginPopup.style.display = "none";
});

// Handle the admin login form submission
const adminLoginForm = document.getElementById("admin-login-form");

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const inviteCode = document.getElementById('invitation-code').value;

  const data = {
    name,
    email,
    inviteCode,
  };
  console.log(data);

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
    if(response.status >= 200 && response.status < 300)
    {
      chrome.windows.create({url: "webcam.html", type: "popup", width: 400, height: 400});
    }
    return response.json();
  }).then((data) => {
    console.log('Success:', data);
  }).catch((error) => {
    console.error('Error:', error);
  });
  // console.log('response:', response.ok);
  // if(!response.ok)
});

adminLoginButton.addEventListener("click", function() {
  console.log('Admin Login Button is clicked');
  chrome.windows.create({url: "admin.html", type: "popup", width: 500, height: 500});
});




