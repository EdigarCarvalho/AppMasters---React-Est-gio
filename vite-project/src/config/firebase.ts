import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCbmJ3DYZQL-_KX9cgocyOm4YP9wSqwsOE",
  authDomain: "appmaster-559db.firebaseapp.com",
  projectId: "appmaster-559db",
  storageBucket: "appmaster-559db.appspot.com",
  messagingSenderId: "12763707573",
  appId: "1:12763707573:web:e6c60b0ba868ab4ba2e6fc",
  measurementId: "G-1QT9PEEK71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export const db = getFirestore(app);