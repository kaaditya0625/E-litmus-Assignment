const express = require('express');
const {InviteCode, User} = require('../db/firebaseConn');

const router = express.Router();

const checkInvite = async (req, res, next) => {
    console.log(req.body);
    const invitationCode = req.body.inviteCode;
  
    // const inviteCodesRef = firebase.storage().ref().child(firebase.storage, 'InviteCodes');
    const snapshot = await InviteCode.get();
    // snapshot.forEach((doc) => {
    //     console.log(doc.id, '=>', doc.data());
    // });
    const list = snapshot.docs.map((doc) => doc.data());

    console.log("=>",invitationCode);

    let present = false;
    // Check if the invitation code exists in the Firebase database
    list.forEach((doc) => {
        console.log(doc.InviteCode);
        if (doc.InviteCode == invitationCode) {
            present = true;
            console.log(present);
            console.log(`Invitation code ${invitationCode} exists in the database`);
            next();
        }
    });
    console.log(present);
    
    // res.send(list);
    // // const inviteCodesRef = bucket.child('InviteCodes');
    // // Check if the invitation code exists in the Firebase database
    // // const snapshot = await inviteCodesRef.child(invitationCode).once('value');
  
    // if (snapshot.exists()) {
    //   console.log(`Invitation code ${invitationCode} exists in the database`);
    //     next();
    // //   res.status(200).send({ message: 'Invitation code is valid' });
    // } else {
    if(present == false)
    {
      console.log(`Invitation code ${invitationCode} does not exist in the database`);
      res.status(400).send({ error: 'Invalid invitation code' });
    }
    // }
};

router.post('/', checkInvite, async (req, res) => {
    const data = req.body;
    console.log(data);
    await User.add(data).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    // await User.add(data);
    res.status(201).send({msg:"User added successfully"});
});

//   In this example, we're adding an endpoint /check-invitation-code that accepts a POST request with the invitation code in the request body. We then use the async/await syntax to make an asynchronous call to the Firebase Realtime Database using the once() method. We then check if the snapshot returned by the once() method exists. If the snapshot exists, it means the invitation code exists in the database, and we send a success response with a message "Invitation code is valid" and a status code of 200. Otherwise, we send an error response with an error message "Invalid invitation code" and a status code of 400.
  
//   Note that in this example, we assume that the invite codes are stored in a node located at '/path/to/invite-codes' in your Firebase Realtime Database. You should replace this with the actual path to your invite codes node. Also, you need to add the necessary code to handle the POST request in your backend.
  
  
  
  
  
  







router.get('/', async (req, res) => {
    const snapshot = await User.get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
    const list = snapshot.docs.map((doc) => ({"id":doc.id,"result":doc.data()}));
    res.send(list);
});

module.exports = router;