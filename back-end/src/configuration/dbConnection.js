// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app")
// const { getAnalytics } = require("firebase/analytics")
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6toJAI2-FE3ZLq53LihYbdocvord7Azs",
  authDomain: "tagpet-7eda5.firebaseapp.com",
  projectId: "tagpet-7eda5",
  storageBucket: "tagpet-7eda5.appspot.com",
  messagingSenderId: "353471495187",
  appId: "1:353471495187:web:f84016da706cbcf81053e6",
  measurementId: "G-GMZEMENJ50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const getUsers = async () => {
  const users = collection(db, 'Users')
  const usersSnapshot = await getDocs(users)
  const usersList = usersSnapshot.docs.map( doc => doc.data())
  return usersList
}

module.exports = app