// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEfTgg83SNx94Tr2-5djZKKS3ajD7O7Wc",
    authDomain: "netflix-clone-618e5.firebaseapp.com",
    projectId: "netflix-clone-618e5",
    storageBucket: "netflix-clone-618e5.appspot.com",
    messagingSenderId: "992975114866",
    appId: "1:992975114866:web:6318a546ac0d48e378e8eb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }