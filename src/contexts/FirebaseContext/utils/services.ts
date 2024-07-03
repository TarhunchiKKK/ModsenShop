import { firebaseConfig } from "@/constants";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

export const application: FirebaseApp = initializeApp(firebaseConfig);

export const firestore: Firestore = getFirestore(application);

export const auth: Auth = getAuth();
