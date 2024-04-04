import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAt,
  endBefore,
  onValue,
} from "firebase/database";

export const getNannies = createAsyncThunk(
  "nannies/getNannies",
  async ({ currentPage }) => {
    return new Promise((resolve, reject) => {
      try {
        const db = getDatabase();
        const postsRef = ref(db, "nannies");
        const nanniesPerPage = 3;
        const startIndex = currentPage * nanniesPerPage;
        const endIndex = startIndex + nanniesPerPage;
        const queryRef = query(
          postsRef,
          orderByKey(),
          startAt(String(startIndex)),
          endBefore(String(endIndex))
        );

        onValue(queryRef, (snapshot) => {
          const data = snapshot.val();
          const nanniesData = data ? Object.values(data) : [];
          resolve({ data: nanniesData });
        });
      } catch (error) {
        reject(error);
      }
    });
  }
);
