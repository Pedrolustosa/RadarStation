import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDkDWD6iYXX71OyqR9HRb5lxZWNZZNTZpo",
    authDomain: "radarstation-7ab26.firebaseapp.com",
    projectId: "radarstation-7ab26",
    storageBucket: "radarstation-7ab26.appspot.com",
    messagingSenderId: "137155292292",
    appId: "1:137155292292:web:94f8ae7378121cd71ca6d1"
};

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;