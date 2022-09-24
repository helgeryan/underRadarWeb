import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeHJ2fGXMThrZUKMFY5x8VxKnyMohr0LA",
    authDomain: "recruiterhub-cb0ef.firebaseapp.com",
    databaseURL: "https://recruiterhub-cb0ef-default-rtdb.firebaseio.com",
    projectId: "recruiterhub-cb0ef",
    storageBucket: "recruiterhub-cb0ef.appspot.com",
    messagingSenderId: "700174578862",
    appId: "1:700174578862:web:4dcb6cce79a8729cc6693f",
    measurementId: "G-WPK3GXY7NW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;