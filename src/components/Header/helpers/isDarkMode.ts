import { THEME_KEY } from "../../../constants";
import { THEMES } from "../../../types";

export function isDarkTheme(): boolean {
    const currentTheme: THEMES | null = localStorage.getItem(
        THEME_KEY
    ) as THEMES | null;

    console.log("Called");

    return currentTheme === THEMES.DARK;
}
