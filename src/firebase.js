import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTExPP1u2rIxSFXSts7miqxvEyVu7h2Eo",
  authDomain: "computer-store-a1f8e.firebaseapp.com",
  projectId: "computer-store-a1f8e",
  storageBucket: "computer-store-a1f8e.appspot.com",
  messagingSenderId: "281990325382",
  appId: "1:281990325382:web:854a81ce1983f17990dd07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// AuthProviders
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { db , auth , storage , googleProvider , facebookProvider }