import { createContext } from "react";
import { IFirebaseContextProviderProps } from "./props";
import { IFirebaseContextState } from "../types";
import { auth, authWithGoogle, authWithPassword, firestore, registerWithPassword } from "./utils";

export const FirebaseContext = createContext<IFirebaseContextState>({} as IFirebaseContextState);

const value: IFirebaseContextState = {
    firestore,
    auth,
    authWithGoogle,
    registerWithPassword,
    authWithPassword,
};

export function FirebaseContextProvider({ children }: IFirebaseContextProviderProps) {
    console.log(auth.currentUser);
    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
}
