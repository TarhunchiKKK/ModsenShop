import { useAppSelector } from "@/store";
import { THEMES } from "@/types";

interface IIconWrapperProps {
    srcLight: string;
    srcDark: string;
    alt: string;
    onClick?: () => void;
}

export function IconThemeWrapper({ srcLight, srcDark, ...other }: IIconWrapperProps) {
    const theme: THEMES = useAppSelector((state) => state.theme.theme);
    return (
        <img
            src={theme === THEMES.LIGHT ? srcLight : srcDark}
            style={{ cursor: "pointer" }}
            {...other}
        />
    );
}
