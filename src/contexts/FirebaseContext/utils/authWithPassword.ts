import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "./services";

export const authWithPassword = async (email: string, password: string) => {
    try {
        const result: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        const { user } = result;
        return { user, success: true } as const;
    } catch (error: unknown) {
        return { user: null, success: false } as const;
    }
};
