import { User } from "firebase/auth";

export type AuthorizationResult = { user: User; success: true } | { user: null; success: false };
