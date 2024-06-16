interface IFooterIconProps {
    link: string;
    icon: string;
}

export function FooterIcon({ link, icon }: IFooterIconProps) {
    return (
        <a href={link} target="_blank">
            <img src={icon} alt="Icon" />
        </a>
    );
}
