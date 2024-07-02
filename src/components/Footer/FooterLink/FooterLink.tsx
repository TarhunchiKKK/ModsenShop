import { Link } from "react-router-dom";
import { FooterLinkSpan } from "./styled";
import { IFooterLinkProps } from "./props";

export function FooterLink({ content, link }: IFooterLinkProps) {
    return (
        <Link to={link}>
            <FooterLinkSpan>{content}</FooterLinkSpan>
        </Link>
    );
}
