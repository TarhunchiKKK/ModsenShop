import { IUserData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: IUserData | null;
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
        user: JSON.parse(storedData) as IUserData,
    };
}

export const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
    reducers: {
        setUser(state, action: PayloadAction<IUserData>) {
            state.user = action.payload;
            localStorage.setItem(state.userKey, JSON.stringify(state.user));
        },
        resetUser(state) {
            state.user = null;
            localStorage.removeItem(state.userKey);
        },
    },
});

export const { setUser, resetUser } = userSlice.actions;
