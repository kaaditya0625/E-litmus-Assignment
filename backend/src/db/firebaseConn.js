// Import the functions you need from the SDKs you need
// const firebase = require('firebase');
const firebase = require('firebase-admin');
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = require('../configs/firebaseConfig')

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const analytics = firebase.getAnalytics(app);

var serviceAccount = require("../../serviceAccountKey.json");

const firebaseInit = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  storageBucket: "gs://e-litmus-67790.appspot.com/"
});
// firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const bucket = storage.bucket();

const db = firebase.firestore();

const User = db.collection("Users");
const InviteCode = db.collection("InviteCodes");

module.exports = {firebase, bucket, User, InviteCode};