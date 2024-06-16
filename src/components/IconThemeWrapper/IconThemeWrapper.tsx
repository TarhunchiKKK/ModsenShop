import { useAppSelector } from "@/store";
import { THEMES } from "@/types";

interface IIconWrapperProps {
    children: [JSX.Element, JSX.Element];
}

export function IconThemeWrapper({ children }: IIconWrapperProps) {
    const theme: THEMES = useAppSelector((state) => state.theme.theme);
    return (
        <div style={{ cursor: "pointer" }}>
            {theme === THEMES.LIGHT && children[0]}
            {theme === THEMES.DARK && children[1]}
        </div>
    );
}
