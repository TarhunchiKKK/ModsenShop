import { SocialNetworks } from "../data";
import { FollowSpan, FooterIconsWrapper, Icon, IconLink } from "./styled";

export function FooterIcons() {
    return (
        <FooterIconsWrapper>
            <FollowSpan>Follow us</FollowSpan>

            {SocialNetworks.map((network) => (
                <IconLink key={network.href} href={network.href} target="_blank">
                    <Icon className={network.iconClassName}></Icon>
                </IconLink>
            ))}
        </FooterIconsWrapper>
    );
}
