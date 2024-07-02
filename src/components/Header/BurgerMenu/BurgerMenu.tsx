import { Link } from "react-router-dom";
import { useMediaQuery } from "@/utils";
import { MenuOption, Wrapper } from "./styled";
import { getBurgerMenuHeight } from "../helpers";
import { BURGER_MENU_BREAKPOINT, BurgerMenuOptions } from "../constants";

export function BurgerMenu() {
    const { isMatch: isBurgerVisible } = useMediaQuery(BURGER_MENU_BREAKPOINT);

    return (
        <>
            {isBurgerVisible && (
                <Wrapper style={{ height: getBurgerMenuHeight() }}>
                    {BurgerMenuOptions.map((option) => (
                        <Link to={option.link} key={option.content}>
                            <MenuOption>{option.content}</MenuOption>
                        </Link>
                    ))}
                </Wrapper>
            )}
        </>
    );
}
