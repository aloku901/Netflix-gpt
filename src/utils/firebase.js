// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU2DHBvp6JF1QFcUpw5998qXPX1dEU1Cc",
  authDomain: "netflixgpt-cd980.firebaseapp.com",
  projectId: "netflixgpt-cd980",
  storageBucket: "netflixgpt-cd980.appspot.com",
  messagingSenderId: "924220542110",
  appId: "1:924220542110:web:73524dc7df587554807f8f",
  measurementId: "G-4P4G60NH7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
