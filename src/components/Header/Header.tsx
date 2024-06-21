import { Link } from "react-router-dom";
import { Container } from "../Container";
import { useBurgerLayout } from "./helpers";
import { Search } from "./Search";
import { HeaderContentWrapper, LogoEndSpan, LogoStartSpan, StyledHeader } from "./styled";
import { HeaderOptions } from "./HeaderOptions";
import { routes } from "@/constants";

export const Header = () => {
    const { isBurgerVisible } = useBurgerLayout();

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
