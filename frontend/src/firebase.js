// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvZRF95ewhFMGWeRijFaMicVHvGWi2pVI",
  authDomain: "dypa-de7e5.firebaseapp.com",
  projectId: "dypa-de7e5",
  storageBucket: "dypa-de7e5.appspot.com",
  messagingSenderId: "202611587501",
  appId: "1:202611587501:web:7bdb49bdc0018661a90924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(app);

export const storage = getStorage(); 