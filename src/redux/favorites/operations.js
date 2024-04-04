import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getDatabase,
  ref,
  push,
  remove,
  set,
  onValue,
  get,
} from "firebase/database";
import { getAuth } from "firebase/auth";

export const addFavoriteNannies = createAsyncThunk(
  "favorites/addNannies",
  async (nannies) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;
      if (userId) {
        const db = getDatabase();
        const postListRef = ref(db, `Users/${userId}`);
        const newPostRef = push(postListRef);
        await set(newPostRef, nannies);
      }
      return nannies;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      throw error;
    }
  }
);

export const removeFavoriteNannies = createAsyncThunk(
  "favorites/removeNannies",
  async (nannies) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;
      if (userId) {
        const db = getDatabase();
        const dbRef = ref(db, `Users/${userId}`);
        const snapshot = await get(dbRef);
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          if (childData.name === nannies.name) {
            const childKey = childSnapshot.key;
            const childRef = ref(db, `Users/${userId}/${childKey}`);
            remove(childRef);
          }
        });
      }
      return nannies;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      throw error;
    }
  }
);

export const fetchUserFavorites = createAsyncThunk(
  "favorites/fetchUserFavorites",
  async () => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;

      const db = getDatabase();
      const dbRef = ref(db, `Users/${userId}`);

      return new Promise()((resolve, reject) => {
        onValue(
          dbRef,
          (snapshot) => {
            const data = snapshot.val();
            const nanniesDataFavorites = data ? Object.values(data) : [];
            resolve({ data: nanniesDataFavorites });
          },
          (error) => {
            reject({ error: error.message });
          }
        );
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
      throw error;
    }
  }
);
