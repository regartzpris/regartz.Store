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


//create user in firebase database
// queryreference object does not have actual data of the collection or document.it instead has property that  tell detail about it or the method to get snapshot object which give the data we are looking for


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //give accsess to google auth provider class from auth library
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;