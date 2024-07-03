import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types";

interface CartState {
    products: IProduct[];
    cartKey: string;
}

const initialState: CartState = {
    products: [] as IProduct[],
    cartKey: import.meta.env.VITE_LOCALSTORAGE_CART_KEY,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        saveProductsToLocalStorage(state, action: PayloadAction<IProduct[]>) {
            state.products = action.payload;
            localStorage.setItem(state.cartKey, JSON.stringify(state.products));
        },
        addProductToLocalStorage(state, action: PayloadAction<IProduct>) {
            state.products.push(action.payload);
            localStorage.setItem(state.cartKey, JSON.stringify(state.products));
        },
        removeProductFromLocalStorage(state, action: PayloadAction<number>) {
            state.products = state.products.filter((product) => product.id !== action.payload);
            localStorage.setItem(state.cartKey, JSON.stringify(state.products));
        },
    },
});

export const {
    addProductToLocalStorage,
    removeProductFromLocalStorage,
    saveProductsToLocalStorage,
} = cartSlice.actions;
