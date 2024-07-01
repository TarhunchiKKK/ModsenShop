import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 96px;
    padding: 18px 0px 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.neutral.gray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.gray};

    @media (min-width: 540px) {
        border: none;
        padding: 0px;
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;

    @media (min-width: 540px) {
        display: block;
    }
`;

export const WrapperTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    text-transform: capitalize;

    @media (min-width: 540px) {
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
    }
`;

export const AngleWrapper = styled.div<{ $isOpen: boolean }>`
    transform: ${(props) => (props.$isOpen ? "rotate(-90deg)" : "none")};
    transition: all 0.5s;

    @media (min-width: 540px) {
        display: none;
    }
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    margin-top: 20px;

    @media (min-width: 640px) {
        font-size: 16px;
        line-height: 27px;
    }
`;
