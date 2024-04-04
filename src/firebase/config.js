import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const {
//   VITE_FIREBASE_API_KEY,
//   VITE_AUTH_DOMAIN,
//   VITE_DATABASE_URL,
//   VITE_PROJECT_ID,
//   VITE_STORAGE_BUCKET,
//   VITE_MESSAGING_SENDER_ID,
//   VITE_APP_ID,
// } = import.meta.env;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nanny-services-afa99.firebaseapp.com",
  databaseURL:
    "https://nanny-services-afa99-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nanny-services-afa99",
  storageBucket: "nanny-services-afa99.appspot.com",
  messagingSenderId: "25935499254",
  appId: "1:25935499254:web:b43e1d1ccfd694c85d41d7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
