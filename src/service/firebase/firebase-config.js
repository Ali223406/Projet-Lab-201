import { initializeApp } from "firebase/app"; // Importing the function to initialize the Firebase app
import { getFirestore } from "firebase/firestore";  // Importing the function to get the Firestore database instance
import { getAuth } from "firebase/auth";  // Importing the function to get the Firebase authentication instance
import { getStorage } from "firebase/storage";  // Importing the function to get the Firebase storage instance

const firebaseConfig = {  // Firebase configuration object containing the necessary keys and identifiers for the Firebase project
  apiKey: "AIzaSyCvCUkhXGcjH0726xVZv5_NRqATSdb637w",
  authDomain: "projet-lab-201-1446e.firebaseapp.com",
  projectId: "projet-lab-201-1446e",
  storageBucket: "projet-lab-201-1446e.firebasestorage.app",
  messagingSenderId: "958147656039",
  appId: "1:958147656039:web:be55c0505963b062b7d7c2"
};

const app = initializeApp(firebaseConfig);  // Initializing the Firebase app with the provided configuration

// services Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;