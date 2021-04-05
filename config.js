import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCUQbXKYPHVNfDd25CzMwuT-iLJ2NVpZ28",
    authDomain: "project-77-668e5.firebaseapp.com",
    projectId: "project-77-668e5",
    storageBucket: "project-77-668e5.appspot.com",
    messagingSenderId: "704145664989",
    appId: "1:704145664989:web:05ff595883f5a8de2f2434"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();