import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWshm-1Rd6-v6sLCkm3yjOjpErfdlSEjs",
    authDomain: "discord-clone-bdfb1.firebaseapp.com",
    databaseURL: "https://discord-clone-bdfb1.firebaseio.com",
    projectId: "discord-clone-bdfb1",
    storageBucket: "discord-clone-bdfb1.appspot.com",
    messagingSenderId: "600193797878",
    appId: "1:600193797878:web:f3372ac5f43694c16ee6d7",
    measurementId: "G-KP462VRJB6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db