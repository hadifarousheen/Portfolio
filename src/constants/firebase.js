// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj8Ym4uoQlhKopzYsxyk7IdEevj4QvF-0",
  authDomain: "portfolio-72ef8.firebaseapp.com",
  projectId: "portfolio-72ef8",
  storageBucket: "portfolio-72ef8.firebasestorage.app",
  messagingSenderId: "451615444924",
  appId: "1:451615444924:web:233a2300070eac08ece5b9",
  measurementId: "G-S18VBT946F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);