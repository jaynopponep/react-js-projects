import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDkcwTH33swcNbPdJLh6EV9d6135RoBVlo",
    authDomain: "bc-hackathon-2023.firebaseapp.com",
    projectId: "bc-hackathon-2023",
    storageBucket: "bc-hackathon-2023.appspot.com",
    messagingSenderId: "839787101909",
    appId: "1:839787101909:web:4cda5e4ddc596817e4ec5c",
    measurementId: "G-J97NK5N9MM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)