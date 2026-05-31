import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "./firebase-config";

const auth = getAuth(app);

export default auth;

/* ---------------- SIGNUP ---------------- */
export const signup = async (email, password, nickname) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("SIGNUP SUCCESS:", result.user);

    // (optionnel) si tu veux Firestore plus tard :
    // await setDoc(doc(db, "users", result.user.uid), {
    //   nickname,
    //   email
    // });

    return result.user;
  } catch (error) {
    console.log("SIGNUP ERROR:", error.code);
    throw error;
  }
};

/* ---------------- LOGIN ---------------- */
export const login = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("LOGIN SUCCESS:", result.user);

    return result.user;
  } catch (error) {
    console.log("LOGIN ERROR:", error.code);
    throw error;
  }
};

/* ---------------- LOGOUT ---------------- */
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Déconnecté !");
  } catch (error) {
    console.log("LOGOUT ERROR:", error);
    throw error;
  }
};