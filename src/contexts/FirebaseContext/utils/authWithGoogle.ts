import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "./services";

export const authWithGoogle = async () => {
    try {
        const provider: GoogleAuthProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        const user: User = result.user;

        return { user, success: true } as const;
    } catch (error) {
        return { user: null, success: false } as const;
    }
};
