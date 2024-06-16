import { styled } from "styled-components";

export const FooterLinkSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 11px;
    font-weight: 400;
    color: var(--color-primary);
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
        transition: ${({ theme }) => theme.transitions.links};
        color: ${({ theme }) => theme.colors.logo};
    }
`;
