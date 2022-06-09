import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGxyPRYENZj-LXMjQ4Ru1yHP_tUCH79VI",
  authDomain: "clone-1aca3.firebaseapp.com",
  projectId: "clone-1aca3",
  storageBucket: "clone-1aca3.appspot.com",
  messagingSenderId: "1022795661495",
  appId: "1:1022795661495:web:fecc9714b463eeb5aa8d32",
  measurementId: "G-2378QDM1ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };