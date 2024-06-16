import { Link } from "react-router-dom";
import { FooterLinkSpan } from "./styled";

interface IFooterLinkProps {
    content: string;
    link: string;
}

export function FooterLink({ content, link }: IFooterLinkProps) {
    return (
        <Link to={link} style={{ color: "inherit" }}>
            <FooterLinkSpan>{content}</FooterLinkSpan>
        </Link>
    );
}
