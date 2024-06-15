interface IFooterIconProps {
    link: string;
    icon: JSX.Element;
}

export function FooterIcon({ link, icon }: IFooterIconProps) {
    return (
        <a href={link} target="_blank">
            {icon}
        </a>
    );
}
