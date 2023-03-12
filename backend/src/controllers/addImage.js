const {bucket} = require('../db/firebaseConn');

// require("firebase/storage"); // must be required for this to work

// const storage = firebaseInit.storage; // create a reference to storage
global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug
// Add Image to Storage and return the file path
const addImage = async (req, res) => {
    try {
        // Grab the file
        const file = req.file;
        console.log(file);
        // Format the filename
        const timestamp = Date.now();
        const name = file.originalname.split(".")[0];
        const type = file.originalname.split(".")[1];
        const fileName = `${name}_${timestamp}.${type}`;
        console.log(fileName);

         // Step 1. Create reference for file name in cloud storage
        const path = `uploads/${fileName}`;
        const imageRef = bucket.file(path);
        
        // Step 2. Upload the file in the bucket storage
        const snapshot = await imageRef.save(file.buffer);
        //    const downloadURL = await snapshot.ref.getDownloadURL();
        // Step 3. Grab the public url

        res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
        });
     }
     catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
}
module.exports = {
    addImage
}