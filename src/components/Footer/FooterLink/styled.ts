import { styled } from "styled-components";

export const FooterLinkSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    @media (min-width: 500px) {
        font-size: 14px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }

    &:hover {
        transition: ${({ theme }) => theme.transitions.links};
        color: ${({ theme }) => theme.colors.main.logo};
    }
`;
