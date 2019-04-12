import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAONyqVwi47sZP5c3EVXgl-vSed_kB_i8Y",
    authDomain: "user-saver.firebaseapp.com",
    databaseURL: "https://user-saver.firebaseio.com",
    projectId: "user-saver",
    storageBucket: "user-saver.appspot.com",
    messagingSenderId: "482511363994"
};

firebase.initializeApp(config);

export default firebase;