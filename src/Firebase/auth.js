import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  // return signInWithPopup(auth, provider)
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignOut = async () => {
  return auth.signOut();
};

// export const doPasswordReset = async(email) => {
//     return auth.sendPasswordResetEmail(auth,email)
// }

// // export const doPasswordUpdate = async(password) => {
// //     return auth.currentUser.updatePassword(password)
// // }

// export const doPasswordChange = async(password) => {
//     return auth.currentUser.updatePassword(auth.currentUser, password)
// }
