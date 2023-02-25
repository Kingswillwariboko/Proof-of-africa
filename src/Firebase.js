import firebase from 'firebase';
import "firebase/storage";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuixAIbAZamQMmRwi1VThHf2YbS82JsN0",
    authDomain: "fubara-odu.firebaseapp.com",
    projectId: "fubara-odu",
    storageBucket: "fubara-odu.appspot.com",
    messagingSenderId: "478451457513",
    appId: "1:478451457513:web:fa74364ed342873ab8bf78",
    measurementId: "G-TWE68LRM6S"
});

const db = firebaseApp.firestore();

export { db };