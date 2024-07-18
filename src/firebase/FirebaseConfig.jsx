import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyDknkZ528Lp-PZ759DiBTzBUIlVQ5uwGo4",
  // authDomain: "ecom-a946b.firebaseapp.com",
  // projectId: "ecom-a946b",
  // storageBucket: "ecom-a946b.appspot.com",
  // messagingSenderId: "484122894175",
  // appId: "1:484122894175:web:cc885c0a385d469b04a0ea"

  
  apikey: process.env.REACT_APP_FIREBASE_APIKEY_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID

};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
