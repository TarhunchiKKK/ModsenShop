import { FollowSpan, FooterIconsWrapper, Icon, IconLink } from "./styled";

export function FooterIcons() {
    return (
        <FooterIconsWrapper>
            <FollowSpan>Follow us</FollowSpan>
            <IconLink href="" target="_blank">
                <Icon className="fa-brands fa-linkedin-in"></Icon>
            </IconLink>
            <IconLink href="" target="_blank">
                <Icon className="fa-brands fa-facebook-f"></Icon>
            </IconLink>
            <IconLink href="" target="_blank">
                <Icon className="fa-brands fa-instagram"></Icon>
            </IconLink>
            <IconLink href="" target="_blank">
                <Icon className="fa-brands fa-twitter"></Icon>
            </IconLink>
        </FooterIconsWrapper>
    );
}
