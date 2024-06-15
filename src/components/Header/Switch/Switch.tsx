import { isDarkTheme } from "../../../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../store";
import "./style.css";

export function Switch() {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState<boolean>(() => isDarkTheme());

    const handleToggleTheme = (_: React.MouseEvent<HTMLInputElement>) => {
        setIsChecked(false);
        dispatch(toggleTheme());
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
