import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const registration = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password, username } = userData;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (username && auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: username });
      }

      if (!user) {
        throw new Error("User not found");
      }

      const data = {
        id: user.uid,
        username: user.displayName,
        email: user.email,
        token: user.refreshToken,
      };
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (!user) {
        throw new Error("User not found");
      }

      const data = {
        id: user.uid,
        username: user.displayName,
        email: user.email,
        token: user.refreshToken,
      };
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const user = await new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          resolve(user);
        });
      });

      if (user) {
        const userData = {
          id: user.uid,
          username: user.displayName,
          email: user.email,
          token: user.refreshToken,
        };
        return userData;
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
