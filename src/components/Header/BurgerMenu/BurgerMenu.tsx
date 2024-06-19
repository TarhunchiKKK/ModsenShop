import { Link } from "react-router-dom";
import { MenuOption, Wrapper } from "./styled";
import { getBurgerMenuHeight, useBurgerLayout } from "../helpers";

const menuOptions: string[] = ["Home", "Shop", "About", "Blog", "Help", "Contact", "Search"];

export function BurgerMenu() {
    const { isBurgerVisible } = useBurgerLayout();

    return (
        <>
            {isBurgerVisible && (
                <Wrapper style={{ height: getBurgerMenuHeight() }}>
                    {menuOptions.map((option, idx) => (
                        <Link to="/" key={idx}>
                            <MenuOption>{option}</MenuOption>
                        </Link>
                    ))}
                </Wrapper>
            )}
        </>
    );
}
