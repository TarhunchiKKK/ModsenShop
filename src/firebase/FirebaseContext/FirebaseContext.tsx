import { createContext } from "react";
import { IFirebaseContextProviderProps } from "./props";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { IFirebaseContextState } from "../types/FirebaseContextState";
import { FirebaseConfig } from "../constants";

export const FirebaseContext = createContext<IFirebaseContextState>({} as IFirebaseContextState);

const application: FirebaseApp = initializeApp(FirebaseConfig);
const firestore: Firestore = getFirestore(application);
const googleAuth: Auth = getAuth();

const authWithGoogle = async () => {
    try {
        const provider: GoogleAuthProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(googleAuth, provider);

        const credentail = GoogleAuthProvider.credentialFromResult(result);
        const token = credentail?.accessToken;
        const user = result.user;

        return { data: { user, token }, success: true } as const;
    } catch (error) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};

const value: IFirebaseContextState = {
    firestore,
    googleAuth,
    authWithGoogle,
};

export function FirebaseContextProvider({ children }: IFirebaseContextProviderProps) {
    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
}
