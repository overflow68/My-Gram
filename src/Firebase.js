import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBiezE6KsMZUcjel_uLYOsrCE0oqdXK4sk",
    authDomain: "my-gram-52ca2.firebaseapp.com",
    projectId: "my-gram-52ca2",
    storageBucket: "my-gram-52ca2.appspot.com",
    messagingSenderId: "423244488326",
    appId: "1:423244488326:web:10f824d58b85b25f90bb07"
})

export const auth = app.auth()
export const db = app.firestore()
export default app