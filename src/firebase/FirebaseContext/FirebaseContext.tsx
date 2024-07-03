import { createContext } from "react";
import { IFirebaseContextProviderProps } from "./props";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import {
    Auth,
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";

import { IFirebaseContextState } from "../types/FirebaseContextState";
import { FirebaseConfig } from "../constants";

export const FirebaseContext = createContext<IFirebaseContextState>({} as IFirebaseContextState);

const application: FirebaseApp = initializeApp(FirebaseConfig);
const firestore: Firestore = getFirestore(application);
const auth: Auth = getAuth();

const authWithGoogle = async () => {
    try {
        const provider: GoogleAuthProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        const credentail = GoogleAuthProvider.credentialFromResult(result);
        const token = credentail?.accessToken;
        const user = result.user;

        return { data: { user, token }, success: true } as const;
    } catch (error) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};

const registerWithPassword = async (email: string, password: string) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = result;
        return { data: { user, token: undefined }, success: true } as const;
    } catch (error: unknown) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};

const authWithPassword = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const { user } = result;
        return { data: { user, token: undefined }, success: true } as const;
    } catch (error: unknown) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};

const value: IFirebaseContextState = {
    firestore,
    auth,
    authWithGoogle,
    registerWithPassword,
    authWithPassword,
};

export function FirebaseContextProvider({ children }: IFirebaseContextProviderProps) {
    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
}
