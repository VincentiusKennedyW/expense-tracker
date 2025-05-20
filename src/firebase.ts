// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDF_ma_aKi1GUuFtUiLWrFp7BWkmMgDJmk",
    authDomain: "expense-tracker-a1700.firebaseapp.com",
    projectId: "expense-tracker-a1700",
    storageBucket: "expense-tracker-a1700.firebasestorage.app",
    messagingSenderId: "286465288358",
    appId: "1:286465288358:web:0591c817c47a1837edac67",
    measurementId: "G-L6KHZZ408H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
