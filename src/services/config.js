import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCIeqRMt5j6qkHz07jtcxKsJyFYo0QcAnc",
    authDomain: "mmmcheese-01.firebaseapp.com",
    projectId: "mmmcheese-01",
    storageBucket: "mmmcheese-01.appspot.com",
    messagingSenderId: "726946990646",
    appId: "1:726946990646:web:76a621f30a316ace37e697"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);