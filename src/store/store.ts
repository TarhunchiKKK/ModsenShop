import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { productFiltersSlice, cartSlice, UISlice, userSlice } from "./slices";
import { productsApi } from "@/api";

export const store = configureStore({
    reducer: {
        [UISlice.name]: UISlice.reducer,
        [productFiltersSlice.name]: productFiltersSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
