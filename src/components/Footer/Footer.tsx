import { Container } from "../Container";
import { FooterForm } from "./FooterForm";
import { FooterLink } from "./FooterLink";
import { FooterIcons } from "./FooterIcons";
import {
    CopyrightGraySpan,
    CopyrightRegularSpan,
    FooterContentFirst,
    FooterContentSecond,
    FooterContentWrapper,
    FooterLinksWrapper,
    StyledFooter
} from "./styled";

export function Footer() {
    return (
        <StyledFooter>
            <Container>
                <FooterContentWrapper>
                    <FooterContentFirst>
                        <FooterLinksWrapper>
                            <FooterLink content="Contact" link="/" />
                            <FooterLink content="Terms of services" link="/" />
                            <FooterLink content="Shipping and returns" link="/" />
                        </FooterLinksWrapper>

                        <FooterForm />
                    </FooterContentFirst>

                    <FooterContentSecond>
                        <div>
                            <CopyrightRegularSpan>{"© 2023 Shelly. "}</CopyrightRegularSpan>
                            <CopyrightGraySpan>{"Terms of use "}</CopyrightGraySpan>
                            <CopyrightRegularSpan>{"and "}</CopyrightRegularSpan>
                            <CopyrightGraySpan>{"privacy policy."}</CopyrightGraySpan>
                        </div>

                        <FooterIcons />
                    </FooterContentSecond>
                </FooterContentWrapper>
            </Container>
        </StyledFooter>
    );
}
