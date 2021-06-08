import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyANe-xwXBFkQKoQdKnmodfHifwGCq310Ek",
    authDomain: "retro-games-store.firebaseapp.com",
    projectId: "retro-games-store",
    storageBucket: "retro-games-store.appspot.com",
    messagingSenderId: "182093145817",
    appId: "1:182093145817:web:53cd04d7581c08b1d740c8",
    measurementId: "G-ZQW0M639TP"
 });

export const getFirebase = () => app
export const getFireStore = () => firebase.firestore(app)