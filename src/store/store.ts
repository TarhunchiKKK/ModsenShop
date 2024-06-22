import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { burgerSlice, themeSlice } from "./slices";
import { productsApi } from "./api";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
        [burgerSlice.name]: burgerSlice.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
