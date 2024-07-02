// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2qwWQH6-tP-rrw0R3UoJmhQk7dAUABF4",
  authDomain: "cc-services-296ce.firebaseapp.com",
  projectId: "cc-services-296ce",
  storageBucket: "cc-services-296ce.appspot.com",
  messagingSenderId: "413065106728",
  appId: "1:413065106728:web:1a933ed8a9352ee33c6c1d",
  measurementId: "G-FYK0W3VR9C"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);