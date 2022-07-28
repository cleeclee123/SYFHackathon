// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhcczs19qGhQCl0NiCuYqjBkUk43yKQU0",
  authDomain: "syf-hackathon.firebaseapp.com",
  projectId: "syf-hackathon",
  storageBucket: "syf-hackathon.appspot.com",
  messagingSenderId: "255329427789",
  appId: "1:255329427789:web:77df26b275df6a96eb5704",
  measurementId: "G-20S5FTF8TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

