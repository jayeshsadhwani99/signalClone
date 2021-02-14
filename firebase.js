import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6qEf5bXzuSVqht5SLp57n90hyAZHNUf0",
  authDomain: "signal-clone-b144a.firebaseapp.com",
  projectId: "signal-clone-b144a",
  storageBucket: "signal-clone-b144a.appspot.com",
  messagingSenderId: "683801058083",
  appId: "1:683801058083:web:7e3e081041c6a319d60a96"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore()
const auth = firebase.auth();

export { db,auth };