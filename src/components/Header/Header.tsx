import { Container } from "../Container";
import { Switch } from "./Switch";
import { IconThemeWrapper } from "../IconThemeWrapper";
import { BasketIconDark, BasketIconLight, SearchIconDark, SearchIconLight } from "@/assets";
import { Link } from "react-router-dom";
import {
    HeaderContentWrapper,
    HeaderOptionsWrapper,
    LogoEndSpan,
    LogoStartSpan,
    ShopLinkSpan,
    StyledHeader
} from "./styled";

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <HeaderContentWrapper>
                    <Link to="/">
                        <LogoStartSpan>{"Modsen S"}</LogoStartSpan>
                        <LogoEndSpan>{"HOPPE"}</LogoEndSpan>
                    </Link>
                    <HeaderOptionsWrapper>
                        <Link to="/shop" style={{ color: "inherit" }}>
                            <ShopLinkSpan>Shop</ShopLinkSpan>
                        </Link>

                        <Switch />

                        <IconThemeWrapper>
                            <img src={SearchIconDark} alt="Basket" />
                            <img src={SearchIconLight} alt="Basket" />
                        </IconThemeWrapper>

                        <IconThemeWrapper>
                            <img src={BasketIconDark} alt="Basket" />
                            <img src={BasketIconLight} alt="Basket" />
                        </IconThemeWrapper>
                    </HeaderOptionsWrapper>
                </HeaderContentWrapper>
            </Container>
        </StyledHeader>
    );
}
