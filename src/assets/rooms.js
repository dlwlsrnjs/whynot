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

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
} else {
	firebase.app() // 이미 초기화되었다면, 초기화 된 것을 사용함
}

const db = firebase.firestore();
const a = [];

db.collection('product').get().then((result)=>{
    result.forEach(doc => {
        a.push(doc.data());
    })
})
console.log("되나")
export default a;

