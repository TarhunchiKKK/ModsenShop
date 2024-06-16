import { styled } from "styled-components";

export const FooterLinkSpan = styled.span`
    font-family: var(--font-primary);
    font-size: 11px;
    font-weight: 400;
    cursor: pointer;
    text-transform: uppercase;

    @media (min-width: 340px) {
        font-size: 12px;
    }

    @media (min-width: 440px) {
        font-size: 14px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }

    &:hover {
        transition: var(--transition-links);
        color: var(--color-logo);
    }
`;
