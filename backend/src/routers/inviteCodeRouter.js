const express = require('express');
const {InviteCode} = require('../db/firebaseConn');

const router = express.Router();

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    await InviteCode.add(data).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    // await InviteCode.add(data);
    console.log("invitecode added successfully")
    res.send({msg:"InviteCode added successfully"});
});

router.get('/', async (req, res) => {
    const snapshot = await InviteCode.get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
    const list = snapshot.docs.map((doc) => ({"id":doc.id,"result":doc.data()}));
    res.send(list);
});

module.exports = router;