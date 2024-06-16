interface IFooterIconProps {
    link: string;
    // icon: JSX.Element;
    icon: string;
}

export function FooterIcon({ link, icon }: IFooterIconProps) {
    return (
        <a href={link} target="_blank">
            {/* {icon} */}
            <img src={icon} alt="Icon" />
        </a>
    );
}
