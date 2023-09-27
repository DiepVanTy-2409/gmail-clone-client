import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyBz-BoVKrqgQd70mLCbbfCeN_r8ZZHV4a8",
    authDomain: "clone-2c098.firebaseapp.com",
    projectId: "clone-2c098",
    storageBucket: "clone-2c098.appspot.com",
    messagingSenderId: "395366809240",
    appId: "1:395366809240:web:57519fde498f3318f29aed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
