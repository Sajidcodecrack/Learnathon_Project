import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJUMMF_8GIkX5H5ZkzmtF2swR2aUOfqd0",
  authDomain: "fair-basket.firebaseapp.com",
  projectId: "fair-basket",
  storageBucket: "fair-basket.firebasestorage.app",
  messagingSenderId: "372519295495",
  appId: "1:372519295495:web:aab5e5767f6e25bd2668a2",
  measurementId: "G-BB6W2CYYEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;