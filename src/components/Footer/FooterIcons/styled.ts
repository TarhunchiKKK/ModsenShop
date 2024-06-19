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
    font-family: var(--font-primary);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: var(--color-primary);
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        width: 47px;
        border: 1px solid var(--color-primary);
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
`;

export const Icon = styled.img`
    width: 12px;
    height: 12px;

    @media (min-width: 500px) {
        width: 18px;
        height: 18px;
    }
`;
