import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA1h2yFfjsR0xZYgFMRSkvceQWtVb3uPBU",
    authDomain: "realappeal-5e4f9.firebaseapp.com",
    databaseURL: "https://realappeal-5e4f9.firebaseio.com",
    projectId: "realappeal-5e4f9",
    storageBucket: "realappeal-5e4f9.appspot.com",
    messagingSenderId: "210538952191",
    appId: "1:210538952191:web:552e477b49605af0f023ca"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()

export default db;