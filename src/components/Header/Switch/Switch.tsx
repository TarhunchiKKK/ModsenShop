import { toggleColorTheme } from "../../../utils";
import { isDarkTheme } from "../helpers";
import { useState } from "react";
import "./style.css";

export function Switch() {
    const [isChecked, setIsChecked] = useState<boolean>(() => isDarkTheme());

    const handleToggleTheme = (_: React.MouseEvent<HTMLInputElement>) => {
        setIsChecked(false);
        toggleColorTheme();
    };

    return (
        <label className="switch-label">
            <input
                className="switch-checkbox"
                type="checkbox"
                checked={isChecked || undefined}
            />
            <span className="switch-span" onClick={handleToggleTheme}></span>
        </label>
    );
}
