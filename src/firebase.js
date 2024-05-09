// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbeZ_RKH2WvK2RnRLDvH5SSLlDZIUmNa4",
  authDomain: "selfstudyit-680cb.firebaseapp.com",
  projectId: "selfstudyit-680cb",
  storageBucket: "selfstudyit-680cb.appspot.com",
  messagingSenderId: "457659801787",
  appId: "1:457659801787:web:97f86cc6261e4c27fd899e",
  measurementId: "G-HDQZQ39KG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// auth.onAuthStateChanged(function (user) {
//   if (user) {
//    console.log(user, "firebase log")
//   } else {
//     console.log("no user")
//   }
// });
export const provider = new GoogleAuthProvider();

export default app;
