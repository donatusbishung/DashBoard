import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgXrYvUs3FDGM0Yt3GScOhad4cmxOYz0Q",
  authDomain: "react-dashboard-d2425.firebaseapp.com",
  projectId: "react-dashboard-d2425",
  storageBucket: "react-dashboard-d2425.appspot.com",
  messagingSenderId: "518342638806",
  appId: "1:518342638806:web:965eec1be3c0be68f59d77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
