// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE1urjaMel6Wq5WoKWj33BObaAvOETAwE",
  authDomain: "toy-client-af6d0.firebaseapp.com",
  projectId: "toy-client-af6d0",
  storageBucket: "toy-client-af6d0.appspot.com",
  messagingSenderId: "698440485565",
  appId: "1:698440485565:web:6c244709c710121195c5d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;