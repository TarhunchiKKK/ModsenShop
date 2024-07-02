import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export interface IFirebaseContextState {
    application: FirebaseApp;
    database: Firestore;
    analytics: Analytics;
}
