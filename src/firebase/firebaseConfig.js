import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCD60uN-JpRFuoL0sJej1tuxe_reO-TX7g",
    authDomain: "react-app-cursos-2021.firebaseapp.com",
    projectId: "react-app-cursos-2021",
    storageBucket: "react-app-cursos-2021.appspot.com",
    messagingSenderId: "584552572493",
    appId: "1:584552572493:web:2c9d23fe5e3633685a5e04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Referencia a la base de datos
  const db = firebase.firestore();
  //para permiter autenticaciómn con google
  const google = new firebase.auth.GoogleAuthProvider();

  //exportamos
  export{
      db,
      google,
      firebase
  }