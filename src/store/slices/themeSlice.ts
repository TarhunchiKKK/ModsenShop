import { createSlice } from "@reduxjs/toolkit";
import { THEMES } from "@/types";
import { setInitialColorTheme, toggleColorTheme } from "@/utils";

const THEME_KEY: string = "theme";

interface ThemeState {
    theme: THEMES;
}

function getInitialState(): ThemeState {
    setInitialColorTheme(THEME_KEY);
    return {
        theme: (localStorage.getItem(THEME_KEY) as THEMES) || THEMES.LIGHT
    };
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: getInitialState(),
    reducers: {
        toggleTheme(state: ThemeState) {
            state.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            toggleColorTheme(THEME_KEY);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
