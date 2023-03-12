// // Get the form elements
// const startTestForm = document.getElementById("start-test-form");
// const adminLoginForm = document.getElementById("admin-login-form");

// // Get the button elements
// const startTestButton = document.getElementById("start-test-button");
// const adminButton = document.getElementById("admin-button");

// // Hide the admin login form initially
// adminLoginForm.style.display = "none";

// // Add event listener to the admin button
// adminButton.addEventListener("click", function() {
//   // Hide the start test form
//   startTestForm.style.display = "none";
  
//   // Show the admin login form
//   adminLoginForm.style.display = "block";
// });


// // // Select the admin login form
// // const adminLoginForm = document.querySelector('#admin-login-form');

// // // Add a submit event listener to the form
// // adminLoginForm.addEventListener('submit', (event) => {
// //   // Prevent the default form submission behavior
// //   event.preventDefault();

// //   // Get the values of the email and password fields
// //   const email = document.querySelector('#admin-email').value;
// //   const password = document.querySelector('#admin-password').value;

// //   // Make an AJAX request to check the admin credentials
// //   const xhr = new XMLHttpRequest();
// //   xhr.open('POST', 'admin-login.php');
// //   xhr.setRequestHeader('Content-Type', 'application/json');
// //   xhr.onreadystatechange = function() {
// //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
// //       // If the login was successful, hide the admin login popup
// //       hideAdminLoginPopup();

// //       // Parse the response JSON data
// //       const responseData = JSON.parse(xhr.responseText);

// //       // Display the admin data in a table
// //       displayAdminTable(responseData);
// //     } else if (xhr.readyState === XMLHttpRequest.DONE) {
// //       // If the login failed, display an error message
// //       const errorMessage = document.createElement('p');
// //       errorMessage.textContent = 'Invalid email or password. Please try again.';
// //       adminLoginForm.appendChild(errorMessage);
// //     }
// //   };
// //   const data = {
// //     email: email,
// //     password: password
// //   };
// //   xhr.send(JSON.stringify(data));
// // });

// // // Function to hide the admin login popup
// // function hideAdminLoginPopup() {
// //   const adminLoginPopup = document.querySelector('#admin-login-popup');
// //   adminLoginPopup.style.display = 'none';
// // }

// // // Function to display the admin data in a table
// // function displayAdminTable(data) {
// //   // Select the container for the admin table
// //   const adminTableContainer = document.querySelector('#admin-table-container');

// //   // Create the table element and its header row
// //   const adminTable = document.createElement('table');
// //   const headerRow = document.createElement('tr');
// //   const idHeader = document.createElement('th');
// //   const nameHeader = document.createElement('th');
// //   const emailHeader = document.createElement('th');
// //   idHeader.textContent = 'ID';
// //   nameHeader.textContent = 'Name';
// //   emailHeader.textContent = 'Email';
// //   headerRow.appendChild(idHeader);
// //   headerRow.appendChild(nameHeader);
// //   headerRow.appendChild(emailHeader);
// //   adminTable.appendChild(headerRow);

// //   // Create a row for each admin and add it to the table
// //   data.forEach(admin => {
// //     const row = document.createElement('tr');
// //     const idCell = document.createElement('td');
// //     const nameCell = document.createElement('td');
// //     const emailCell = document.createElement('td');
// //     idCell.textContent = admin.id;
// //     nameCell.textContent = admin.name;
// //     emailCell.textContent = admin.email;
// //     row.appendChild(idCell);
// //     row.appendChild(nameCell);
// //     row.appendChild(emailCell);
// //     adminTable.appendChild(row);
// //   });

// //   // Add the table to the container
// //   adminTableContainer.appendChild(adminTable);
// // }











// // // Get references to the relevant DOM elements
// // const adminLoginForm = document.getElementById('admin-login-form');
// // const adminEmailInput = document.getElementById('admin-email');
// // const adminPasswordInput = document.getElementById('admin-password');
// // const adminLoginPopup = document.getElementById('admin-login-popup');
// // const adminButton = document.getElementById('admin-button');
// // const startTestForm = document.getElementById('start-test-form');
// // const adminTable = document.getElementById('admin-table');

// // // Add event listeners to the admin login form and admin button
// // adminLoginForm.addEventListener('submit', handleAdminLogin);
// // adminButton.addEventListener('click', showAdminLoginPopup);

// // // Function to handle admin login
// // function handleAdminLogin(event) {
// //   event.preventDefault(); // Prevent the form from submitting

// //   // Get the admin email and password from the form inputs
// //   const adminEmail = adminEmailInput.value;
// //   const adminPassword = adminPasswordInput.value;

// //   // TODO: Add authentication logic here

// //   // For this example, we'll assume that the login was successful
// //   hideAdminLoginPopup();
// //   showAdminTable();
// // }

// // // Function to show the admin login popup
// // function showAdminLoginPopup() {
// //   adminLoginPopup.style.display = 'block';
// // }

// // // Function to hide the admin login popup
// // function hideAdminLoginPopup() {
// //   adminLoginForm.reset(); // Reset the form inputs
// //   adminLoginPopup.style.display = 'none';
// // }

// // // Function to show the admin table
// // function showAdminTable() {
// //   // TODO: Fetch and display the admin table data here
// //   adminTable.style.display = 'table';
// // }




// Mock data for demonstration purposes
const users = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      code: "1234",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      code: "5678",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      code: "9012",
      image: "https://via.placeholder.com/150"
    }
  ];
  
  // Function to create table rows from user data
  function createUserRow(user) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);
    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);
    const codeCell = document.createElement("td");
    codeCell.textContent = user.code;
    row.appendChild(codeCell);
    const imageCell = document.createElement("td");
    const image = document.createElement("img");
    image.src = user.image;
    image.alt = "User Image";
    imageCell.appendChild(image);
    row.appendChild(imageCell);
    return row;
  }
  
  // Function to populate user table with data
  function populateUserTable() {
    const userTableBody = document.getElementById("user-table-body");
    for (const user of users) {
      const row = createUserRow(user);
      userTableBody.appendChild(row);
    }
  }
  
  // Call function to populate user table on page load
  populateUserTable();
  