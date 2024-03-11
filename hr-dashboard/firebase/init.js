// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1-1Nj6l4yPguwunmFSe0W0naVj-i-x-A",
  authDomain: "managerio-4a0e9.firebaseapp.com",
  databaseURL:
    "https://managerio-4a0e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "managerio-4a0e9",
  storageBucket: "managerio-4a0e9.appspot.com",
  messagingSenderId: "799127830122",
  appId: "1:799127830122:web:b7a3fcbbd138877deb5413",
  measurementId: "G-PKFWMSGP8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
