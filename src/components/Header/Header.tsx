import { Container } from "../Container";
import {
    HeaderContentWrapper,
    HeaderOptionsWrapper,
    LogoEndSpan,
    LogoStartSpan,
    ShopLinkSpan,
    StyledHeader
} from "./styled";
import {
    BasketIconDark,
    BasketIconLight,
    Logo,
    SearchIconDark,
    SearchIconLight
} from "../../assets";
import { Switch } from "./Switch";
import { IconThemeWrapper } from "../IconWrapper";

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <HeaderContentWrapper>
                    <div>
                        <LogoStartSpan>Modsen S</LogoStartSpan>
                        <LogoEndSpan>HOPPE</LogoEndSpan>
                        {/* <Logo /> */}
                    </div>
                    <HeaderOptionsWrapper>
                        <ShopLinkSpan>Shop</ShopLinkSpan>
                        <Switch />
                        <IconThemeWrapper>
                            <SearchIconDark />
                            <SearchIconLight />
                        </IconThemeWrapper>

                        <IconThemeWrapper>
                            <BasketIconDark />
                            <BasketIconLight />
                        </IconThemeWrapper>
                    </HeaderOptionsWrapper>
                </HeaderContentWrapper>
            </Container>
        </StyledHeader>
    );
}
