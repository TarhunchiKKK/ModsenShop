import { Container } from "../Container";
import {
    HeaderContentWrapper,
    HeaderOptionsWrapper,
    ShopLinkSpan,
    StyledHeader
} from "./styled";
import { BasketIcon, Logo, SearchIcon } from "../../assets";
import { Switch } from "./Switch";

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <HeaderContentWrapper>
                    <div>
                        <Logo />
                    </div>
                    <HeaderOptionsWrapper>
                        <ShopLinkSpan>Shop</ShopLinkSpan>
                        <Switch />
                        <SearchIcon />
                        <BasketIcon />
                    </HeaderOptionsWrapper>
                </HeaderContentWrapper>
            </Container>
        </StyledHeader>
    );
}
