
# E-litmus Assignment
This Chrome extension is designed to work on assessment websites, and it activates when a user opens a test page. Upon activation, the extension opens a form where the user can enter their name, email, and test invitation code. Once the user has entered their information, they can click the "Start Test" button to begin the assessment.

When the user clicks the "Start Test" button, their information is sent to the backend server for storage. The extension then performs a camera and audio check to ensure that the user's equipment is working properly. If there are any issues with the camera or audio, the user will be prompted to resolve them before proceeding with the assessment.

Once the camera and audio check has been completed, the extension initiates image proctoring. This involves capturing images of the user and their surroundings every three minutes (configurable) during the assessment. The images are sent to the backend server for storage, along with any user activity data.

All data captured by the extension, including images and user activity data, is stored on the backend server. This allows the assessment administrators to review the data and ensure that the assessment was conducted in a fair and secure manner.

Overall, this Chrome extension provides a comprehensive solution for assessment websites that require image proctoring and user activity monitoring. By requiring users to enter their name, email, and test invitation code, the extension ensures that only authorized users can access the assessment. The camera and audio check, along with the image proctoring, provide an added layer of security and help to prevent cheating during the assessment. Finally, by storing all data on the backend server, the extension makes it easy for assessment administrators to review the data and ensure that the assessment was conducted in a fair and secure manner.


## Frontend Installation

To deploy this project run and  use the extension, follow these simple steps:

- Clone this repository to your local machine using the following command:
```bash
git clone git@github.com:<username>/<repository-name>.git](https://www.github.com/octokatherine)
```
- Open Google Chrome and navigate to the "Extensions" page by clicking the three dots in the top-right corner of the window and selecting
```bash
 "More tools" -> "Extensions".
```
- Turn on "Developer mode" by clicking the toggle switch in the top-right corner of the page.
```bash
Developer mode
```

- Click "Load unpacked" and select the folder containing the cloned repository.
```bash
Load unpacked
```

- The extension is now installed and ready to use.


## Usage
- Ensure that the Chrome Extension is installed and running in the browser before attempting to use it on an assessment website.
- Upon opening a test page, the extension will automatically activate and prompt the user to input their details through a form.
- Fill in the required information, including name, email, and test invitation code, and click the "Start Test" button to proceed.
- The extension will perform a camera and audio check to ensure that the user's webcam and microphone are working properly.
- The candidate's live webcam feed will be displayed on the page during the test.
- The extension will initiate image proctoring and send images of the user from the browser to the server at configurable intervals.
- All user activity data will be recorded and stored on the backend server, including the candidate's name, email, test invitation code, and stored images.
- If any issues arise during the test, the user can reach out to the admin for assistance using the contact information provided in the extension.
- After completing the test, the user can exit the assessment website and close the extension.
- The admin dashboard can be used to access all user information and stored images for review and monitoring purposes.

## Backend Setup Instructions

To setup the backend for this Chrome extension, follow the instructions below.

- Navigate to the backend folder using the command line interface by typing the following command:

```bash
cd backend
```
- Install all dependencies using the npm install command. This will install all the necessary packages and modules required for the backend to run:

```bash
npm install
```
- After installing the dependencies, run the server using the npm start command:

```bash
npm start
```
- This will start the Node.js Express server on your local machine and it will be available at http://localhost:3000.
### Note:
 Before running the server, make sure to configure your Firebase credentials in the .env file. You can find the .env.example file in the backend folder. Rename it to .env and update the values with your Firebase configuration.

Once the server is up and running, you can test the API endpoints using any REST client like Postman or by making HTTP requests directly from your web application.

### API Endpoints

This backend server provides the following API endpoints:

- POST /users - This endpoint is used to create a new user. The request should contain the user's name, email, and test invitation code in the request body. Upon receiving the request, the server will store the user's information in the Firebase database and return a success message.

- GET /users - This endpoint is used to retrieve all the user information stored in the Firebase database. Upon receiving the request, the server will fetch all the user information and return it as a JSON array.

- GET /users/:id - This endpoint is used to retrieve a specific user's information by their ID. The ID should be passed as a parameter in the URL. Upon receiving the request, the server will fetch the user information and return it as a JSON object.

- POST /images - This endpoint is used to store the user's images on the server. The images should be sent in the request body as a binary file. Upon receiving the request, the server will store the images in the Firebase storage and return a success message.

- GET /images/:id - This endpoint is used to retrieve a specific user's images by their ID. The ID should be passed as a parameter in the URL. Upon receiving the request, the server will fetch the images from the Firebase storage and return them as binary data.

### Note: 
All the endpoints require authentication using Firebase Authentication. Make sure to pass the user's access token in the Authorization header of the request.
## Tech Stack
```bash
HTML
CSS
JavaScript
Node.js
Express.js
Google Firebase (for storing images and data )
StackOverflow
Git

```
## 🚀 About Me
I'm a full stack developer and passionate cse final year student. I am enthusiastic about software development, programming, and web development. I am skilled in various programming languages such as C, C++, and web development technologies like HTML, CSS, and JavaScript. I have experience in using Git, Node.js, and Express.js, among other developer tools.


## 🛠 Skills
```bash
C,C++,HTML,CSS,JavaScript, Git, Node.js, Express.js,VS Code, MATLAB, GitHub, Google Firebase,Window
```
```bash
Leadership, Teamwork, Problem Solving, Time Management, Event Management, Quick Learner
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

