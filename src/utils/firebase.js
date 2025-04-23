// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsAHiNfR0wjPqOLAxL5PCgPqX7GUng8tw",
    authDomain: "runv2-95d79.firebaseapp.com",
    projectId: "runv2-95d79",
    storageBucket: "runv2-95d79.firebasestorage.app",
    messagingSenderId: "772612154203",
    appId: "1:772612154203:web:64684f918bd0b5df06b07e",
    measurementId: "G-L3DBVVY6JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);