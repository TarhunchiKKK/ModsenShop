import { useAppSelector } from "@/store";
import { THEMES } from "@/types";
import { IconWrapper } from "./styled";
import { IIconWrapperProps } from "./props";

export function IconThemeWrapper({ srcLight, srcDark, ...other }: IIconWrapperProps) {
    const theme: THEMES = useAppSelector((state) => state.UI.theme);

    return (
        <IconWrapper>
            <img src={theme === THEMES.LIGHT ? srcLight : srcDark} {...other} />
        </IconWrapper>
    );
}
