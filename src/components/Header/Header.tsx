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
