import { createContext } from "react";
import { IFirebaseContextProviderProps } from "./props";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { IFirebaseContextState } from "../types/FirebaseContextState";
import { FirebaseConfig } from "../constants";

export const FirebaseContext = createContext<IFirebaseContextState>({} as IFirebaseContextState);

export function FirebaseContextProvider({ children }: IFirebaseContextProviderProps) {
    const application: FirebaseApp = initializeApp(FirebaseConfig);
    const analytics: Analytics = getAnalytics(application);
    const database: Firestore = getFirestore(application);

    const value: IFirebaseContextState = {
        application,
        database,
        analytics,
    };

    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
}
