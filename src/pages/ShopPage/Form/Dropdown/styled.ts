import { styled } from "styled-components";

export const Wrapper = styled.div<{ $marginBottom: number }>`
    position: relative;
    margin-bottom: ${(props) => props.$marginBottom}px;
`;

export const Select = styled.select`
    padding: 15px 12px 16px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.neutral.gray};
    border-radius: 4px;
    outline: none;

    color: ${({ theme }) => theme.colors.main.black};
    background-color: ${({ theme }) => theme.colors.main.white};
    cursor: pointer;
`;
