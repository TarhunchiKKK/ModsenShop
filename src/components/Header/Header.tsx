import { Container } from "../Container";
import { Link } from "react-router-dom";
import { useBurgerLayout } from "./helpers";
import { Search } from "./Search";
import { HeaderContentWrapper, LogoEndSpan, LogoStartSpan, StyledHeader } from "./styled";
import { HeaderOptions } from "./HeaderOptions";

export const Header = () => {
    const { isBurgerVisible } = useBurgerLayout();

    return (
        <StyledHeader>
            <Container>
                <HeaderContentWrapper>
                    <Link to="/">
                        <LogoStartSpan>{"Modsen S"}</LogoStartSpan>
                        <LogoEndSpan>{"HOPPE"}</LogoEndSpan>
                    </Link>

                    <HeaderOptions />
                </HeaderContentWrapper>

                {isBurgerVisible && <Search />}
            </Container>
        </StyledHeader>
    );
};
