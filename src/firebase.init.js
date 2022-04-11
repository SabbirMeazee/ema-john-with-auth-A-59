// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3XB_2ScTWlBacAuuaHFyLSYkl_WZx9mU",
    authDomain: "ema-john-simple-fae54.firebaseapp.com",
    projectId: "ema-john-simple-fae54",
    storageBucket: "ema-john-simple-fae54.appspot.com",
    messagingSenderId: "754344135610",
    appId: "1:754344135610:web:586df63bcdb0043450eb83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;