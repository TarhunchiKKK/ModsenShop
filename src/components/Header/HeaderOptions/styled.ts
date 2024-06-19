import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media (min-width: 360px) {
        gap: 20px;
    }

    @media (min-width: 540px) {
        gap: 42px;
    }
`;

export const ShopLinkSpan = styled.span`
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: 400;
    margin-right: 0px;

    @media (min-width: 420px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        margin-right: 62px;
    }

    &:hover {
        transition: var(--transition-links);
        color: var(--color-logo);
    }
`;
