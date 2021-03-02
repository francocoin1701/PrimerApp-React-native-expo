import firebase from 'firebase'
import 'firebase/firestore'


  var firebaseConfig = {
    apiKey: "AIzaSyCJDrOPnyyxblQCxom9VGze9AY7WSIIMpE",
    authDomain: "reactnativeexpo-e20de.firebaseapp.com",
    projectId: "reactnativeexpo-e20de",
    storageBucket: "reactnativeexpo-e20de.appspot.com",
    messagingSenderId: "758169648774",
    appId: "1:758169648774:web:a82c627f939024b9c2db07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  export default {
      firebase,
      db
  }