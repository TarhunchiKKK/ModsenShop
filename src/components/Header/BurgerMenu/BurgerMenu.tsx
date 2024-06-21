import { Link } from "react-router-dom";
import { MenuOption, Wrapper } from "./styled";
import { getBurgerMenuHeight, useBurgerLayout } from "../helpers";
import { BurgerMenuOptions } from "../data";

export function BurgerMenu() {
    const { isBurgerVisible } = useBurgerLayout();

    return (
        <>
            {isBurgerVisible && (
                <Wrapper style={{ height: getBurgerMenuHeight() }}>
                    {BurgerMenuOptions.map((option) => (
                        <Link to={option.link} key={option.content} style={{ color: "inherit" }}>
                            <MenuOption>{option.content}</MenuOption>
                        </Link>
                    ))}
                </Wrapper>
            )}
        </>
    );
}
