// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
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
export const auth = getAuth(app)

// Pegando o banco de dados
export const db = getFirestore(app)
export const userCollection = collection(db, 'Animal')
