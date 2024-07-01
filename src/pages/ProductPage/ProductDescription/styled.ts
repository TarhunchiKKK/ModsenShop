import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 96px;
`;

export const WrapperTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    text-transform: capitalize;

    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.gray};
    padding-bottom: 34px;

    margin-bottom: 39px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 107px;
        border: 1px solid ${({ theme }) => theme.colors.main.black};
    }
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
`;
