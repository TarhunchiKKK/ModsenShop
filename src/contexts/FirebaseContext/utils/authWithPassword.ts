import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "./services";

export const authWithPassword = async (email: string, password: string) => {
    try {
        const result: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        const { user } = result;
        return { data: { user, token: undefined }, success: true } as const;
    } catch (error: unknown) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};
