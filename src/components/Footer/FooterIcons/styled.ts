import { styled } from "styled-components";

export const FooterIconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 29.5px;

    @media (min-width: 460px) {
        gap: 24px;
    }

    @media (min-width: 540px) {
        gap: 29.5px;
    }
`;

export const FollowSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        width: 47px;
        border: 1px solid ${({ theme }) => theme.colors.main.black};
        margin-left: 16px;
        margin-right: 5px;
    }

    @media (min-width: 500px) {
        display: none;
    }
`;

export const IconLink = styled.a`
    &:first-of-type {
        display: none;
    }

    @media (min-width: 500px) {
        &:first-of-type {
            display: inline;
        }
    }

    &:hover {
        fill: ${({ theme }) => theme.colors.main.black};
        stroke: ${({ theme }) => theme.colors.main.white};
    }
`;

export const Icon = styled.i`
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    @media (min-width: 500px) {
        width: 18px;
        height: 18px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.main.black};
    }
`;
