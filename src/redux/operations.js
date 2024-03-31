import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  updateProfile,
  //   signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const registration = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password, username } = userData;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: username });

      const user = auth.currentUser;

      const data = {
        user: {
          username: user.displayName,
          email: user.email,
        },
      };
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const signIn = createAsyncThunk(
//   "auth/signin",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { email, password } = userData;
//       const { user } = await signInWithEmailAndPassword(auth, email, password);

//       const data = {
//         user: {
//           name: user.displayName,
//           email: user.email,
//           id: user.uid,
//         },
//       };
//       return data;
//     } catch (error) {
//       if (typeof error === "string") {
//         return rejectWithValue(error);
//       }
//       throw error;
//     }
//   }
// );
