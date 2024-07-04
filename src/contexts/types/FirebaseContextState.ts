import { Firestore } from "firebase/firestore";
import { Auth } from "firebase/auth";
import { AuthorizationResult } from "@/api/types";

export interface IFirebaseContextState {
    firestore: Firestore;
    auth: Auth;
    authWithGoogle: () => Promise<AuthorizationResult>;
    authWithPassword: (email: string, password: string) => Promise<AuthorizationResult>;
    registerWithPassword: (email: string, password: string) => Promise<AuthorizationResult>;
}
