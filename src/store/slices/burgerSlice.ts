import { createSlice } from "@reduxjs/toolkit";

interface BurgerState {
    isOpen: boolean;
}

export const burgerSlice = createSlice({
    name: "burger",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleBurger(state: BurgerState) {
            state.isOpen = !state.isOpen;
            document.body.style.overflow = state.isOpen ? "hidden" : "";
        }
    }
});

export const { toggleBurger } = burgerSlice.actions;
