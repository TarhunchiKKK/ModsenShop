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

    padding-bottom: 34px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.gray};

    margin-bottom: 39px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
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
