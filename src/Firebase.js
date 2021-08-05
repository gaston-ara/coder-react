import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGKnQHKZe7Sx6iZOUhZsesJnhsor9gO9k",
    authDomain: "modernclix-react.firebaseapp.com",
    projectId: "modernclix-react",
    storageBucket: "modernclix-react.appspot.com",
    messagingSenderId: "704715716911",
    appId: "1:704715716911:web:bd1c5f6ef635ea7a7dc9da"
  };

  const appFirebase = firebase.initializeApp(firebaseConfig);

  export const getFirestore = () =>{
    return firebase.firestore(appFirebase)
  }