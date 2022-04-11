// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-rjpZlC8qe8-VC2a85fC5uow5W4BDlV0",
    authDomain: "ema-jhon-app-d482f.firebaseapp.com",
    projectId: "ema-jhon-app-d482f",
    storageBucket: "ema-jhon-app-d482f.appspot.com",
    messagingSenderId: "1043126295226",
    appId: "1:1043126295226:web:1fa3011770922cca918083",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
