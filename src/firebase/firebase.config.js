// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIjh3JmAG-sD1NZYOcjJUmCj88StfwnKA",
    authDomain: "ema-john-with-firebase-a-c500f.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-c500f",
    storageBucket: "ema-john-with-firebase-a-c500f.appspot.com",
    messagingSenderId: "49931954679",
    appId: "1:49931954679:web:2df3b402616769b88ae6f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;  // app কে export default করে দিতে হবে।