import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD8QfGSRIKe-fyWJKNhQYAO-rFh6Jz3xi8",
    authDomain: "fir-6086f.firebaseapp.com",
    projectId: "fir-6086f",
    storageBucket: "fir-6086f.appspot.com",
    messagingSenderId: "358198717076",
    appId: "1:358198717076:web:624b4c78462924d765e281",
    measurementId: "G-L0R0R1M61H"
  };
  export default firebase.initializeApp(firebaseConfig);
 