import { THEMES } from "@/types";

export function toggleColorTheme() {
    const themeKey: string = import.meta.env.VITE_THEME_LOCALSTORAGE_KEY;

    const currentTheme: THEMES = localStorage.getItem(themeKey) as THEMES;
    const nextTheme: THEMES = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    localStorage.setItem(themeKey, nextTheme);

    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(nextTheme);
}
