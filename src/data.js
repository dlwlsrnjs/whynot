import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDwO_QADTHKK3C1b9Nt0i1YcDWpKRnDfnM",
    authDomain: "whynot-29910.firebaseapp.com",
    projectId: "whynot-29910",
    storageBucket: "whynot-29910.appspot.com",
    messagingSenderId: "527390837538",
    appId: "1:527390837538:web:20d2acaaaeea047e98337b",
    measurementId: "G-Q2R5C4Q187"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const a = [];

db.collection('rooms').get().then((result)=>{
    result.forEach(doc => {
        a.push(doc.data());
    })
})
console.log(a)
export default a;

