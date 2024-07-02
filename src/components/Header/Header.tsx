import { Link } from "react-router-dom";
import { routes } from "@/constants";
import { useMediaQuery } from "@/utils";
import { Container } from "../Container";
import { Search } from "./Search";
import { HeaderOptions } from "./HeaderOptions";
import { BURGER_MENU_BREAKPOINT } from "./constants";
import { HeaderContentWrapper, LogoEndSpan, LogoStartSpan, StyledHeader } from "./styled";

export const Header = () => {
    const { isMatch: isBurgerVisible } = useMediaQuery(BURGER_MENU_BREAKPOINT);

    return (
        <StyledHeader>
            <Container>
                <HeaderContentWrapper>
                    <Link to={routes.home}>
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
