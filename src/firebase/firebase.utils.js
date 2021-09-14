import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

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

export const db = getFirestore();

const provider = new GoogleAuthProvider();
export const signInwithGoogle = () => signInWithPopup(auth, provider)
  .then(result => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return credential;
  })
  .catch(error => {
    console.log(error)
  });


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  let docSnap;
  const docRef = doc(db, "users", userAuth.uid)
  try {
    docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const { displayName, email } = userAuth || additionalData;
      const createdAt = new Date();

      try {
        docSnap = await setDoc(docRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
        }, { merge: true })
      } catch (error) {
        console.log(error.message)
      }
    }
  } catch (error) {
    console.log("Error: ", error.message)
  }
  return docSnap;
}


export default app;