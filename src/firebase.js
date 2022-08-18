import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlaL4MaBlbIF8msMXLFJJHXAdH2_1KHl0",
  authDomain: "note-app-2bd37.firebaseapp.com",
  projectId: "note-app-2bd37",
  storageBucket: "note-app-2bd37.appspot.com",
  messagingSenderId: "921630405748",
  appId: "1:921630405748:web:66238b208272e16705cd21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);
