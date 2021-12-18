// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-exp9YFDGcoMu8Stb-jPjgoIWYxfu0S0",
  authDomain: "stonks-70b12.firebaseapp.com",
  projectId: "stonks-70b12",
  storageBucket: "stonks-70b12.appspot.com",
  messagingSenderId: "22522206342",
  appId: "1:22522206342:web:91ae8f158bb53c06d9d907",
  measurementId: "G-8B95395BQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);