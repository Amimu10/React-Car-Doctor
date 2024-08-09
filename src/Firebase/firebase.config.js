// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzrdP1kxkZERbzw5K1USbUyrKvpLNZ86w",
  authDomain: "react-car-doctor-8bcbd.firebaseapp.com",
  projectId: "react-car-doctor-8bcbd",
  storageBucket: "react-car-doctor-8bcbd.appspot.com",
  messagingSenderId: "105332946543",
  appId: "1:105332946543:web:c31e88ac81a80ffd067f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 
 export default auth; 
