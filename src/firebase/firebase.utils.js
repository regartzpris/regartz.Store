import firebase from 'firebase/app';
import 'firebase/firestore'; //for db
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBNjwUqzmBVJUnpOIsOOuY5LWvEjGI1XWY",
    authDomain: "regartz-db.firebaseapp.com",
    databaseURL: "https://regartz-db.firebaseio.com",
    projectId: "regartz-db",
    storageBucket: "",
    messagingSenderId: "683130478164",
    appId: "1:683130478164:web:293a20ed0c589b72"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //give accsess to google auth provider class from auth library
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;