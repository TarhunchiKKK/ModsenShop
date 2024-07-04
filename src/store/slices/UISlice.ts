import { THEMES } from "@/types";
import { setInitialColorTheme, toggleColorTheme } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    isBurgerOpen: boolean;
    theme: THEMES;
}

function getInitialState(): UIState {
    setInitialColorTheme();
    const themeKey: string = import.meta.env.VITE_THEME_LOCALSTORAGE_KEY;
    return {
        theme: (localStorage.getItem(themeKey) as THEMES) || THEMES.LIGHT,
        isBurgerOpen: false,
    };
}

export const UISlice = createSlice({
    name: "UI",
    initialState: getInitialState(),
    reducers: {
        toggleTheme(state: UIState) {
            state.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            toggleColorTheme();
        },
        toggleBurger(state: UIState) {
            state.isBurgerOpen = !state.isBurgerOpen;
            document.body.style.overflow = state.isBurgerOpen ? "hidden" : "";
        },
    },
});

export const { toggleBurger, toggleTheme } = UISlice.actions;
