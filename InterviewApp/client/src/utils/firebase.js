// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-eb913.firebaseapp.com",
  projectId: "interviewiq-eb913",
  storageBucket: "interviewiq-eb913.firebasestorage.app",
  messagingSenderId: "1023176769545",
  appId: "1:1023176769545:web:d6998dde9def0a13c4b8d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider =new GoogleAuthProvider()
export{auth,provider}

