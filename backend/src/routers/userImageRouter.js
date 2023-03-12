const express = require('express');
const multer = require('multer');
// import { getStorage, ref, uploadBytes } from "firebase/storage";
const {addImage} = require('../controllers/addImage')

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

router.post('/upload', upload, addImage);

// router.post('/', async (req, res) => {
//     const storage = firebase.getStorage();
//     // const storageRef = ref(storage, 'images/mountains.jpg');

//     // // Create file metadata including the content type
//     // /** @type {any} */
//     // const metadata = {
//     // contentType: 'image/jpeg',
//     // };

//     // // Upload the file and metadata
//     // const uploadTask = uploadBytes(storageRef, file, metadata);

//     const bucket = storage.ref();

//     // Set the filename for the image (you can use a unique identifier for each image)
//     const filename = 'my-image.jpg';

//     // Create a reference to the image file in Firebase Storage
//     const imageRef = bucket.child(filename);

//     // Upload the image data to Firebase Storage
//     imageRef.putString(dataURL, 'data_url')
//     .then(snapshot => console.log('Image uploaded:', snapshot))
//     .catch(error => console.error('Error uploading image:', error));

//     res.send({msg:"User added successfully"});
// });

module.exports = router;