// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCajDE85M0K48k63U8sI7h5d2Sn6EWOB-w",
  authDomain: "fir-practise-5a62d.firebaseapp.com",
  projectId: "fir-practise-5a62d",
  storageBucket: "fir-practise-5a62d.appspot.com",
  messagingSenderId: "356729804751",
  appId: "1:356729804751:web:ea8d1fdc63725f76a624ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();