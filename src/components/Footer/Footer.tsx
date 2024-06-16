import { Container } from "../Container";
import { FooterForm } from "./FooterForm";
import { FooterLink } from "./FooterLink";
import { FooterIcon } from "./FooterIcon";
import { LinkedInIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets";
import {
    CopyrightGraySpan,
    CopyrightRegularSpan,
    FooterContentFirst,
    FooterContentSecond,
    FooterContentWrapper,
    FooterIconsWrapper,
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

                        <FooterIconsWrapper>
                            <FooterIcon link="" icon={LinkedInIcon} />
                            <FooterIcon link="" icon={FacebookIcon} />
                            <FooterIcon link="" icon={InstagramIcon} />
                            <FooterIcon link="" icon={TwitterIcon} />
                        </FooterIconsWrapper>
                    </FooterContentSecond>
                </FooterContentWrapper>
            </Container>
        </StyledFooter>
    );
}
