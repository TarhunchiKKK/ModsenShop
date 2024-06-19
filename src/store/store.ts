import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { burgerSlice, themeSlice } from "./slices";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
        [burgerSlice.name]: burgerSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
