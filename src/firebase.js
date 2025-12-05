// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBo80O_9JicIhcY6OF02W84Dsr7y5a__Bw',
  authDomain: 'react-portfolio-dashboar-44560.firebaseapp.com',
  databaseURL:
    'https://react-portfolio-dashboar-44560-default-rtdb.firebaseio.com',
  projectId: 'react-portfolio-dashboar-44560',
  storageBucket: 'react-portfolio-dashboar-44560.firebasestorage.app',
  messagingSenderId: '338770020868',
  appId: '1:338770020868:web:a5918b99a99733158fc351',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
// This will house all of our Portfolio projects
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
