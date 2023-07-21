import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkrKEYda4cAQEOekQTmsHcgKTycF9UBp4",
  authDomain: "appmasterestagio.firebaseapp.com",
  projectId: "appmasterestagio",
  storageBucket: "appmasterestagio.appspot.com",
  messagingSenderId: "819807938946",
  appId: "1:819807938946:web:ea566c20fee1238bee479b",
  measurementId: "G-MTJHF6R8Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export const db = getFirestore(app);