import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDmT3QFko0c79G0WK34PLajDsF8in_guo",
  authDomain: "sleek-notes.firebaseapp.com",
  projectId: "sleek-notes",
  storageBucket: "sleek-notes.appspot.com",
  messagingSenderId: "1000325283055",
  appId: "1:1000325283055:web:e2972fb71cd91a85ec6f1a",
  measurementId: "G-R2T1RMQ6BM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
