import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyACuiHB1aK2J2u5fo-qNia0ROCe5oVlhWQ",
    authDomain: "sonnylinkedin-7b99d.firebaseapp.com",
    projectId: "sonnylinkedin-7b99d",
    storageBucket: "sonnylinkedin-7b99d.appspot.com",
    messagingSenderId: "354252292452",
    appId: "1:354252292452:web:2411da587d900d57b2ba71"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth()

  export {db, auth};
