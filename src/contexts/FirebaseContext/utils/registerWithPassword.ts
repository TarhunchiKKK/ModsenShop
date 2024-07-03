import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./services";

export const registerWithPassword = async (email: string, password: string) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = result;
        return { data: { user, token: undefined }, success: true } as const;
    } catch (error: unknown) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};
