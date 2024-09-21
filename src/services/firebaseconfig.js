// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADDUSCV4aQlheFY2ttR1CpBIPmijl7XZ4",
    authDomain: "gerenciador-orcamento-pe-710b7.firebaseapp.com",
    projectId: "gerenciador-orcamento-pe-710b7",
    storageBucket: "gerenciador-orcamento-pe-710b7.appspot.com",
    messagingSenderId: "192222018986",
    appId: "1:192222018986:web:d64fe2ba3009f654bcbfd3",
    measurementId: "G-36Z64P6BL4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };
