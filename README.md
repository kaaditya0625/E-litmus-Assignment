# E-litmus-Assignment
This Chrome extension is designed to work on assessment websites, and it activates when a user opens a test page. Upon activation, the extension opens a form where the user can enter their name, email, and test invitation code. Once the user has entered their information, they can click the "Start Test" button to begin the assessment.

When the user clicks the "Start Test" button, their information is sent to the backend server for storage. The extension then performs a camera and audio check to ensure that the user's equipment is working properly. If there are any issues with the camera or audio, the user will be prompted to resolve them before proceeding with the assessment.

Once the camera and audio check has been completed, the extension initiates image proctoring. This involves capturing images of the user and their surroundings every three minutes (configurable) during the assessment. The images are sent to the backend server for storage, along with any user activity data.

All data captured by the extension, including images and user activity data, is stored on the backend server. This allows the assessment administrators to review the data and ensure that the assessment was conducted in a fair and secure manner.

Overall, this Chrome extension provides a comprehensive solution for assessment websites that require image proctoring and user activity monitoring. By requiring users to enter their name, email, and test invitation code, the extension ensures that only authorized users can access the assessment. The camera and audio check, along with the image proctoring, provide an added layer of security and help to prevent cheating during the assessment. Finally, by storing all data on the backend server, the extension makes it easy for assessment administrators to review the data and ensure that the assessment was conducted in a fair and secure manner.
