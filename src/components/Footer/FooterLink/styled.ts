import { styled } from "styled-components";

export const FooterLinkSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    color: var(--color-primary);
    cursor: pointer;
    text-transform: uppercase;
`;
