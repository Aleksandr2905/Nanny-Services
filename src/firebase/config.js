import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nanny-services-430c5.firebaseapp.com",
  databaseURL:
    "https://nanny-services-430c5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nanny-services-430c5",
  storageBucket: "nanny-services-430c5.appspot.com",
  messagingSenderId: "43575755399",
  appId: "1:43575755399:web:a07127790fc253221f6e22",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
