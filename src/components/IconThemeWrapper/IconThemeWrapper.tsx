import { useAppSelector } from "@/store";
import { THEMES } from "@/types";
import { IconWrapper } from "./styled";

interface IIconWrapperProps {
    srcLight: string;
    srcDark: string;
    alt: string;
    onClick?: () => void;
}

export function IconThemeWrapper({ srcLight, srcDark, ...other }: IIconWrapperProps) {
    const theme: THEMES = useAppSelector((state) => state.theme.theme);
    return (
        <IconWrapper>
            <img src={theme === THEMES.LIGHT ? srcLight : srcDark} {...other} />
        </IconWrapper>
    );
}
