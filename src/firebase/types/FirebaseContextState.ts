import { Firestore } from "firebase/firestore";
import { GoogleAuthResult } from "./GoogleAuthResult";
import { Auth } from "firebase/auth";

export interface IFirebaseContextState {
    firestore: Firestore;
    googleAuth: Auth;
    authWithGoogle: () => Promise<GoogleAuthResult>;
}
