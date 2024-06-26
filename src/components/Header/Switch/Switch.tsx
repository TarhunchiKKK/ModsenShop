import { useDispatch } from "react-redux";
import { toggleTheme, useAppSelector } from "@/store";
import { THEMES } from "@/types";
import "./style.css";

export function Switch() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <label className="switch-label">
            <input
                className="switch-checkbox"
                type="checkbox"
                defaultChecked={useAppSelector((state) => state.theme.theme) === THEMES.DARK}
            />
            <span className="switch-span" onClick={handleClick}></span>
        </label>
    );
}
