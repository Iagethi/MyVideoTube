import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYgxa7EOG7h9kMkTa3iHVguZz_NW_Q-2Y",
  authDomain: "video-bb67b.firebaseapp.com",
  projectId: "video-bb67b",
  storageBucket: "video-bb67b.appspot.com",
  messagingSenderId: "341057443026",
  appId: "1:341057443026:web:545e9353906994b319090b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
