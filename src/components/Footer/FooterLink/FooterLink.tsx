import { Link } from "react-router-dom";
import { FooterLinkSpan } from "./styled";

interface IFooterLinkProps {
    content: string;
    link: string;
}

export function FooterLink({ content, link }: IFooterLinkProps) {
    return (
        // <Link to={link}>
        <FooterLinkSpan>{content}</FooterLinkSpan>
        // </Link>
    );
}
