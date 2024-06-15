import { createSlice } from "@reduxjs/toolkit";
import { THEME_KEY } from "../../constants";
import { THEMES } from "../../types";
import { toggleColorTheme } from "../../utils";

interface ThemeState {
    theme: THEMES;
}

const initialState: ThemeState = {
    theme: (localStorage.getItem(THEME_KEY) as THEMES) || THEMES.LIGHT
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state: ThemeState) {
            state.theme =
                state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            toggleColorTheme();
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
