import styled from "styled-components";

export const Wrapper = styled.div<{ $marginBottom: number }>`
    position: relative;
    margin-bottom: ${(props) => props.$marginBottom}px;
`;

export const Input = styled.input`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    width: 100%;
    padding-bottom: 11px;

    color: ${({ theme }) => theme.colors.neutral.darkGray};
    background: ${({ theme }) => theme.colors.main.white};

    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.gray};
    outline: none;
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
`;
