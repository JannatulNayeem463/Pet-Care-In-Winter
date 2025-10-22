// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnYwbYsZ5l-m0oh6gb-sbHx9NBNdVj1iQ",
  authDomain: "pet-care-u.firebaseapp.com",
  projectId: "pet-care-u",
  storageBucket: "pet-care-u.firebasestorage.app",
  messagingSenderId: "153380237297",
  appId: "1:153380237297:web:538137fb27794e56bc1e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;