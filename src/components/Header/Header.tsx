import { Container } from "../Container";
import {
    HeaderContentWrapper,
    HeaderOptionsWrapper,
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
                        <span>Shop</span>
                        {/* <input type="checkbox" /> */}
                        <Switch />
                        <SearchIcon />
                        <BasketIcon />
                    </HeaderOptionsWrapper>
                </HeaderContentWrapper>
            </Container>
        </StyledHeader>
    );
}
