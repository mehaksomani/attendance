// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqxgQam8HF6gsLB-q6EfF7QYslH9vcER8",
  authDomain: "attendance-system-8ef74.firebaseapp.com",
  projectId: "attendance-system-8ef74D",
 // storageBucket: "attendance-system-8ef74.appspot.com",
  messagingSenderId: "726133977106",
  appId: "1:726133977106:android:7c765ca2d6671bfbd328cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export { auth };