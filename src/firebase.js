import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEcn-MrE7Au_QG6XSE9CrXFVFpWyjJ4bo",
  authDomain: "chaitu--clone-1d4f4.firebaseapp.com",
  projectId: "chaitu--clone-1d4f4",
  storageBucket: "chaitu--clone-1d4f4.appspot.com",
  messagingSenderId: "704722844290",
  appId: "1:704722844290:web:24dfc7775c26079367529b",
  measurementId: "G-X3PYG0Y0SY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };