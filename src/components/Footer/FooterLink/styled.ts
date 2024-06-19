import { styled } from "styled-components";

export const FooterLinkSpan = styled.span`
    font-family: var(--font-primary);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--color-secondary);

    @media (min-width: 500px) {
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
