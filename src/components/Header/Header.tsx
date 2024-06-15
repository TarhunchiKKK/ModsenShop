import { Container } from "../Container";
import {
    HeaderContentWrapper,
    HeaderOptionsWrapper,
    LogoEndSpan,
    LogoStartSpan,
    ShopLinkSpan,
    StyledHeader
} from "./styled";
import { BasketIconDark, BasketIconLight, SearchIconDark, SearchIconLight } from "../../assets";
import { Switch } from "./Switch";
import { IconThemeWrapper } from "../IconThemeWrapper";

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
