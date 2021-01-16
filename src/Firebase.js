
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpWnb90a6ulR1iaTMe4k9WcfFBZcmMb1s",
  authDomain: "my-app-65c57.firebaseapp.com",
  projectId: "my-app-65c57",
  storageBucket: "my-app-65c57.appspot.com",
  messagingSenderId: "405713495637",
  appId: "1:405713495637:web:288c99c43040a950ba56dc",
  measurementId: "G-EYTJHM66NW"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const database=firebaseApp.firestore();

  export default database;