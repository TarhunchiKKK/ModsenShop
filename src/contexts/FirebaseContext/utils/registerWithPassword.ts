import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./services";

export const registerWithPassword = async (email: string, password: string) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = result;
        return { user, success: true } as const;
    } catch (error: unknown) {
        console.log(error);
        return { user: null, success: false } as const;
    }
};
