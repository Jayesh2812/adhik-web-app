// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaelwlWRauYkQFSJDCbGxaRJyF7ACHtcU",
    authDomain: "react-lessons-ded34.firebaseapp.com",
    databaseURL: "https://react-lessons-ded34.firebaseio.com",
    projectId: "react-lessons-ded34",
    storageBucket: "react-lessons-ded34.appspot.com",
    messagingSenderId: "664185367220",
    appId: "1:664185367220:web:5db3f261d498df12d205e1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;