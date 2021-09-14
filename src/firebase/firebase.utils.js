import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCb9Q9nLH0GtxVWN2Mz9kxLu3UQuSRtDU",
  authDomain: "celyod-db.firebaseapp.com",
  projectId: "celyod-db",
  storageBucket: "celyod-db.appspot.com",
  messagingSenderId: "98040380661",
  appId: "1:98040380661:web:6154670d8c2186ea9359bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
export const signInwithGoogle = () => signInWithPopup(auth, provider)
  .then(result => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return credential;
  })
  .catch(error => {
    console.log(error)
  });

export default app;