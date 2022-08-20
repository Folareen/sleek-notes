import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoPdAHTXv8FR10sPfMrSdT-Rj-CxAGq3Q",
  authDomain: "text-editor-74904.firebaseapp.com",
  projectId: "text-editor-74904",
  storageBucket: "text-editor-74904.appspot.com",
  messagingSenderId: "51140412176",
  appId: "1:51140412176:web:c0b77429a763c47d335b95",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
