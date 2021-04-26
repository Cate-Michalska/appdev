// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
        apiKey: "AIzaSyA9JCrvVyf0txqV38PSk9LkdgbHlaSXbRg",
        authDomain: "vue-full-course-d2eb9.firebaseapp.com",
        projectId: "vue-full-course-d2eb9",
        storageBucket: "vue-full-course-d2eb9.appspot.com",
        messagingSenderId: "617997832917",
        appId: "1:617997832917:web:b457321e996479c815c85c",
        measurementId: "G-33W3CSKS87"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database(); 
export const chatsRef = db.ref('chats'); 

export default firebase; 