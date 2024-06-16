import { THEMES } from "../types";

export function setInitialColorTheme(themeKey: string) {
    const currentTheme: THEMES | null = localStorage.getItem(themeKey) as THEMES | null;

    if (currentTheme === null) {
        localStorage.setItem(themeKey, THEMES.LIGHT);
        document.documentElement.classList.add(THEMES.LIGHT);
    } else {
        document.documentElement.classList.add(currentTheme);
    }
}
