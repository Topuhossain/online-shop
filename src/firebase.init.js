// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyutjXMDur4G99j90vzHjHsoamCQmfkBE",
  authDomain: "online-shop-5d18d.firebaseapp.com",
  projectId: "online-shop-5d18d",
  storageBucket: "online-shop-5d18d.appspot.com",
  messagingSenderId: "434304500282",
  appId: "1:434304500282:web:d8c5bca47bd3e0b0f3ab03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;