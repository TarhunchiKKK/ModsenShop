import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface UserState {
    user: User | null;
    userKey: string;
}

function getInitialState(): UserState {
    const userKey = import.meta.env.VITE_LOCALSTORAGE_USER_KEY;
    const storedData = localStorage.getItem("user");
    if (!storedData) {
        return {
            userKey,
            user: null,
        };
    }
    return {
        userKey,
        user: JSON.parse(storedData) as User,
    };
}

export const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            localStorage.set;
        },
        resetUser(state) {
            state.user = null;
            localStorage.removeItem(state.userKey);
        },
    },
});

export const { setUser, resetUser } = userSlice.actions;
