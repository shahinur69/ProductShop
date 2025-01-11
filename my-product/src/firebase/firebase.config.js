// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs2gp7-EjuYnlt8KIfv4yknBryI1gJbeM",
  authDomain: "productshop-9d0b8.firebaseapp.com",
  projectId: "productshop-9d0b8",
  storageBucket: "productshop-9d0b8.firebasestorage.app",
  messagingSenderId: "918487303537",
  appId: "1:918487303537:web:f63d28cf210cecddc0a2d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;