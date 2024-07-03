import { Firestore } from "firebase/firestore";
import { AuthorizationResult } from "./AuthorizationResult";
import { Auth } from "firebase/auth";

export interface IFirebaseContextState {
    firestore: Firestore;
    auth: Auth;
    authWithGoogle: () => Promise<AuthorizationResult>;
    authWithPassword: (email: string, password: string) => Promise<AuthorizationResult>;
    registerWithPassword: (email: string, password: string) => Promise<AuthorizationResult>;
}
