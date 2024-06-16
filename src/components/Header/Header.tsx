import { Container } from "../Container";
import { Switch } from "./Switch";
import { IconThemeWrapper } from "../IconThemeWrapper";
import { BasketIconDark, BasketIconLight, SearchIconDark, SearchIconLight } from "../../assets";
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
                    <div>
                        <LogoStartSpan>{"Modsen S"}</LogoStartSpan>
                        <LogoEndSpan>{"HOPPE"}</LogoEndSpan>
                    </div>
                    <HeaderOptionsWrapper>
                        <ShopLinkSpan>Shop</ShopLinkSpan>
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
