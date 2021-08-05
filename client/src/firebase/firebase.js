import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDjxWwhV8n2lmt0sJYaJxNna1A2Sfak7lI",
    authDomain: "bansky-store2.firebaseapp.com",
    projectId: "bansky-store2",
    storageBucket: "bansky-store2.appspot.com",
    messagingSenderId: "520488181470",
    appId: "1:520488181470:web:206f8d4637aa4f02a92c4f"
});

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}

