// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-c0712.firebaseapp.com",
  projectId: "mern-real-estate-c0712",
  storageBucket: "mern-real-estate-c0712.appspot.com",
  messagingSenderId: "236827295823",
  appId: "1:236827295823:web:12b9fa0ad4b470aaaa2a3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);