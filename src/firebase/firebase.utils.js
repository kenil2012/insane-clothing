import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAG-1eP_n2QNIG9ksszG1zcxNAF1VyL_OM",
    authDomain: "insane-db.firebaseapp.com",
    databaseURL: "https://insane-db.firebaseio.com",
    projectId: "insane-db",
    storageBucket: "insane-db.appspot.com",
    messagingSenderId: "590449890752",
    appId: "1:590449890752:web:d604f0073298204c16a425",
    measurementId: "G-RK52H2BWHF"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;