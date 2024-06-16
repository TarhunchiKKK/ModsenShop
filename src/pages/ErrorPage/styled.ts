import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConteentWrapper = styled.div``;

export const ContentText = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: var(--color-secondary);
`;

export const Button = styled.button``;
