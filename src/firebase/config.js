// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';

// import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const API_URL = process.env.APIKEY
console.log(API_URL)

const firebaseConfig = {
  apiKey: "AIzaSyCiwE9S5Z9dZPd9MTt7d01JNClMQ6aGaTI",
  authDomain: "social-cards-b4d0a.firebaseapp.com",
  projectId: "social-cards-b4d0a",
  storageBucket: "social-cards-b4d0a.appspot.com",
  messagingSenderId: "1039080192203",
  appId: "1:1039080192203:web:366c59b3b9ad72778b834e",
  measurementId: "G-PZ74XGB6W1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getFirestore(firebase);
  
const analytics = getAnalytics(firebase);
const storage = getStorage(firebase);

export default database;
