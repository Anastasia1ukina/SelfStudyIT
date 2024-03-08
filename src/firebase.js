// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbeZ_RKH2WvK2RnRLDvH5SSLlDZIUmNa4",
    authDomain: "selfstudyit-680cb.firebaseapp.com",
    projectId: "selfstudyit-680cb",
    storageBucket: "selfstudyit-680cb.appspot.com",
    messagingSenderId: "457659801787",
    appId: "1:457659801787:web:97f86cc6261e4c27fd899e",
    measurementId: "G-HDQZQ39KG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;