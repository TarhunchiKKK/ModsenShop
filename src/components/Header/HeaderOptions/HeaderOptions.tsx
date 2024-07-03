import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleBurger, useAppSelector } from "@/store";
import { IconThemeWrapper } from "@/components";
import { routes } from "@/constants";
import { useMediaQuery } from "@/utils";
import {
    BasketIconDark,
    BasketIconLight,
    BurgerIconDark,
    BurgerIconLight,
    CrossIconDark,
    CrossIconLight,
    SearchIconDark,
    SearchIconLight,
} from "@/assets";
import { Switch } from "../Switch";
import { BurgerMenu } from "../BurgerMenu";
import { BURGER_MENU_BREAKPOINT } from "../constants";
import { ShopLinkSpan, Wrapper } from "./styled";

export function HeaderOptions() {
    const dispatch = useDispatch();
    const { isBurgerOpen } = useAppSelector((state) => state.UI);
    const { isMatch: isBurgerVisible } = useMediaQuery(BURGER_MENU_BREAKPOINT);

    const handleBurgerClick = () => {
        dispatch(toggleBurger());
    };

    return (
        <Wrapper>
            {!isBurgerVisible && (
                <>
                    <Link to={routes.shop}>
                        <ShopLinkSpan>Shop</ShopLinkSpan>
                    </Link>

                    <Switch />

                    <IconThemeWrapper
                        srcLight={SearchIconDark}
                        srcDark={SearchIconLight}
                        alt="Search"
                    />
                </>
            )}

            <IconThemeWrapper srcLight={BasketIconDark} srcDark={BasketIconLight} alt="Basket" />

            {isBurgerVisible && (
                <IconThemeWrapper
                    srcLight={isBurgerOpen ? CrossIconDark : BurgerIconDark}
                    srcDark={isBurgerOpen ? CrossIconLight : BurgerIconLight}
                    alt="Burger"
                    onClick={handleBurgerClick}
                />
            )}

            {isBurgerOpen && <BurgerMenu />}
        </Wrapper>
    );
}
