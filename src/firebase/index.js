import firebase from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const loginConGoogle = () => auth.signInWithPopup(provider);
export const logout = () => auth.signOut();
