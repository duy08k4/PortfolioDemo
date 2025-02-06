// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY_APIKEY,
  authDomain: process.env.REACT_APP_KEY_AUTHDOMAIN,
  projectId: process.env.REACT_APP_KEY_PROJECTID,
  storageBucket: process.env.REACT_APP_KEY_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_KEY_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_KEY_APPID,
  measurementId: process.env.REACT_APP_KEY_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db