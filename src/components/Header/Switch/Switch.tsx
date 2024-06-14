import "./style.css";

export function Switch() {
    return (
        <label className="switch-label">
            <input className="switch-checkbox" type="checkbox" />
            <span className="switch-span"></span>
        </label>
    );
}
