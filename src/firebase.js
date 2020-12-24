import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDW2or0GxxHtSSrPdaPUuVw51ZhNAzIEI8",
    authDomain: "linkedin-clone-161d9.firebaseapp.com",
    projectId: "linkedin-clone-161d9",
    storageBucket: "linkedin-clone-161d9.appspot.com",
    messagingSenderId: "833757752530",
    appId: "1:833757752530:web:b0a83c2f93875f1ae1910b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};