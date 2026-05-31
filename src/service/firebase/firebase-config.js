import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvCUkhXGcjH0726xVZv5_NRqATSdb637w",
  authDomain: "projet-lab-201-1446e.firebaseapp.com",
  projectId: "projet-lab-201-1446e",
  storageBucket: "projet-lab-201-1446e.firebasestorage.app",
  messagingSenderId: "958147656039",
  appId: "1:958147656039:web:be55c0505963b062b7d7c2"
};

const app = initializeApp(firebaseConfig);

// services Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;