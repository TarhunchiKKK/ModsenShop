import styled from "styled-components";

export const Wrapper = styled.div<{ $marginBottom: number }>`
    position: relative;
    margin-bottom: ${(props) => props.$marginBottom}px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 3px 0px 11px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.gray};
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
`;
