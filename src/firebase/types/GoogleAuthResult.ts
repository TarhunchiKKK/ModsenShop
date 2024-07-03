import { User } from "firebase/auth";

export type GoogleAuthResult =
    | { data: { user: User; token: string | undefined }; success: true }
    | { data: null; success: false };
