import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your Firebase configuration
const app = firebase.initializeApp({
    apiKey: 'AIzaSyAyuQxiX9dqBPLoaHgZ9MCFwkXmq4JTCXI',
    authDomain: 'query-validator-cf9b7.firebaseapp.com',
    projectId: 'query-validator-cf9b7',
    storageBucket: 'query-validator-cf9b7.appspot.com',
    messagingSenderId: '431109036182',
    appId: '1:431109036182:web:a840217b26708a708f0ab7'
});

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Export Firebase services
// export const firestore = firebase.firestore();
export const auth = app.auth();
export default app;