// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.FIREBASE,
  authDomain: "blog-next-2d133.firebaseapp.com",
  projectId: "blog-next-2d133",
  storageBucket: "blog-next-2d133.appspot.com",
  messagingSenderId: "502071838112",
  appId: "1:502071838112:web:c680b2c22f0f890c0610c5",
  measurementId: "G-C9DDEJ6JCZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);