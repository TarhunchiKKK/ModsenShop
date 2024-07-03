import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./services";

export const authWithGoogle = async () => {
    try {
        const provider: GoogleAuthProvider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);

        const credentail = GoogleAuthProvider.credentialFromResult(result);
        const token = credentail?.accessToken;
        const user = result.user;

        return { data: { user, token }, success: true } as const;
    } catch (error) {
        console.log(error);
        return { data: null, success: false } as const;
    }
};
