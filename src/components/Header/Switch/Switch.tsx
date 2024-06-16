import { isDarkTheme } from "../../../utils";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../store";
import "./style.css";

export function Switch() {
    const dispatch = useDispatch();

    return (
        <label className="switch-label">
            <input
                className="switch-checkbox"
                type="checkbox"
                defaultChecked={isDarkTheme()}
            />
            <span
                className="switch-span"
                onClick={() => dispatch(toggleTheme())}
            ></span>
        </label>
    );
}
