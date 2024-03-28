// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuCZGq4aFeJY4Q4sjxLA6o9TzEiW221Ow",
  authDomain: "irrs-344cd.firebaseapp.com",
  projectId: "irrs-344cd",
  storageBucket: "irrs-344cd.appspot.com",
  messagingSenderId: "637612918551",
  appId: "1:637612918551:web:1843603014e3ae6fb31952",
  measurementId: "G-7DD9K46QM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);