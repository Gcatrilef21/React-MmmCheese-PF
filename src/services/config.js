import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCIeqRMt5j6qkHz07jtcxKsJyFYo0QcAnc",
    authDomain: "mmmcheese-01.firebaseapp.com",
    projectId: "mmmcheese-01",
    storageBucket: "mmmcheese-01.appspot.com",
    messagingSenderId: "726946990646",
    appId: "1:726946990646:web:76a621f30a316ace37e697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);