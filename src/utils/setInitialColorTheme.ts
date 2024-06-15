import { THEME_KEY } from "../constants";
import { THEMES } from "../types";

export function setInitialColorTheme() {
    const currentTheme: THEMES | null = localStorage.getItem(
        THEME_KEY
    ) as THEMES | null;

    if (currentTheme === null) {
        localStorage.setItem(THEME_KEY, THEMES.LIGHT);
        document.documentElement.classList.add(THEMES.LIGHT);
    } else {
        document.documentElement.classList.add(currentTheme);
    }
}
