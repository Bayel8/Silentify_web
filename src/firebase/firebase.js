import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaDZBtQ_aHIpGd8Xv3-7KPOlGg5t879ho",
  authDomain: "silenttalk-ff133.firebaseapp.com",
  projectId: "silenttalk-ff133",
  storageBucket: "silenttalk-ff133.appspot.com",
  messagingSenderId: "987776117833",
  appId: "1:987776117833:web:b9af45448865d900b76398",
  measurementId: "G-80FRG6V4D5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const google_auth = new GoogleAuthProvider();


