import { toggleBurger, useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { useBurgerLayout } from "../helpers";
import { Link } from "react-router-dom";
import { IconThemeWrapper } from "@/components/IconThemeWrapper";
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
import { ShopLinkSpan, Wrapper } from "./styled";
import { BurgerMenu } from "../BurgerMenu";
import { routes } from "@/constants";

export function HeaderOptions() {
    const dispatch = useDispatch();
    const { isOpen: isBurgerOpen } = useAppSelector((state) => state.burger);
    const { isBurgerVisible } = useBurgerLayout();

    const handleBurgerClick = () => {
        dispatch(toggleBurger());
    };

    return (
        <Wrapper>
            {!isBurgerVisible && (
                <>
                    <Link to={routes.shop} style={{ color: "inherit" }}>
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
