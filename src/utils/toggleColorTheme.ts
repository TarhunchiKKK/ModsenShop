import { THEME_KEY } from "../constants";
import { THEMES } from "../types";

export function toggleColorTheme() {
    const currentTheme: THEMES = localStorage.getItem(THEME_KEY) as THEMES;
    const nextTheme: THEMES =
        currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    localStorage.setItem(THEME_KEY, nextTheme);

    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(nextTheme);
}
