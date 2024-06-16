import styled from "styled-components";

export const StyledHeader = styled.header`
    padding-top: 10px;

    @media (min-width: 768px) {
        padding-top: 24px;
    }

    @media (min-width: 1024px) {
        padding-top: 64px;
    }
`;

export const HeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 7px 10px;
    border-bottom: 1px solid #d8d8d8;

    @media (min-width: 640px) {
        padding-left: 0px;
        padding-right: 0px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 17px;
    }
`;

export const LogoStartSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.logo};

    @media (min-width: 420px) {
        font-size: 24px;
    }

    @media (min-width: 768px) {
        font-size: 35px;
    }
`;

export const LogoEndSpan = styled(LogoStartSpan)`
    color: var(--color-primary);
`;

export const HeaderOptionsWrapper = styled.div`
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
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    margin-right: 0px;
    cursor: pointer;

    @media (min-width: 420px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        margin-right: 62px;
    }

    &:hover {
        transition: ${({ theme }) => theme.transitions.links};
        color: ${({ theme }) => theme.colors.logo};
    }
`;

export const ShopLink = styled.span``;
