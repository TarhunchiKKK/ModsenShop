import { styled } from "styled-components";

export const Form = styled.form<{ $isVisible: boolean }>`
    position: relative;
    display: ${(props) => (props.$isVisible ? "block" : "none")};

    margin: 16px 0px;
`;

export const FiltersWrapper = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;

export const Button = styled.button<{ $isRelative: boolean }>`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.main.logo};

    position: ${(props) => (props.$isRelative ? "relative" : "absolute")};
    right: 0px;
    bottom: 0px;

    background: none;
    border: none;
    cursor: pointer;
`;

export const Icon = styled.img`
    cursor: pointer;
`;
