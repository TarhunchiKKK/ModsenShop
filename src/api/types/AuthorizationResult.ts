import { User } from "firebase/auth";

export type AuthorizationResult =
    | { data: { user: User; token: string | undefined }; success: true }
    | { data: null; success: false };
