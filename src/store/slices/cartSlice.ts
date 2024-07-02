import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStoredProduct } from "../types";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [] as IStoredProduct[],
        cartKey: import.meta.env.VITE_LOCALSTORAGE_CART_KEY,
    },
    reducers: {
        saveProductsToLocalStorage(state, action: PayloadAction<IStoredProduct[]>) {
            state.products = action.payload;
            localStorage.setItem(state.cartKey, JSON.stringify(state.products));
        },
        addProductToLocalStorage(state, action: PayloadAction<IStoredProduct>) {
            state.products.push(action.payload);
            localStorage.setItem(state.cartKey, JSON.stringify(state.products));
        },
        removeProductFromLocalStorage(state, action: PayloadAction<number>) {
            state.products = state.products.filter((product) => product.data.id !== action.payload);
            localStorage.setItem(state.cartKey, JSON.stringify(state.products));
        },
    },
});

export const {
    addProductToLocalStorage,
    removeProductFromLocalStorage,
    saveProductsToLocalStorage,
} = cartSlice.actions;
