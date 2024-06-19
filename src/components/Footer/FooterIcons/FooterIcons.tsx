import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/assets";
import { FollowSpan, FooterIconsWrapper, Icon, IconLink } from "./styled";

export function FooterIcons() {
    return (
        <FooterIconsWrapper>
            <FollowSpan>Follow us</FollowSpan>
            <IconLink href="" target="_blank">
                <Icon src={LinkedInIcon} alt="LinkedIn" />
            </IconLink>
            <IconLink href="" target="_blank">
                <Icon src={FacebookIcon} alt="Facebook" />
            </IconLink>
            <IconLink href="" target="_blank">
                <Icon src={InstagramIcon} alt="Instagram" />
            </IconLink>
            <IconLink href="" target="_blank">
                <Icon src={TwitterIcon} alt="Twitter" />
            </IconLink>
        </FooterIconsWrapper>
    );
}
