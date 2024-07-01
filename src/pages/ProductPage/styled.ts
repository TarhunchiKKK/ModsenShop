import { styled } from "styled-components";

export const Section = styled.section`
    padding: 10px 16px 0px;

    @media (min-width: 640px) {
        padding: 70px 16px 90px;
    }

    @media (min-width: 1024px) {
        padding: 128px 0px 250px;
    }
`;

export const InfoWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 18px;

    @media (min-width: 640px) {
        margin-bottom: 60px;
    }

    @media (min-width: 768px) {
        height: 600px;
        flex-direction: row;
        gap: 64px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 123px;
    }
`;

export const ProductContainerWrapper = styled.div`
    width: 136px;
    margin: auto;
    padding-bottom: 69px;

    @media (min-width: 540px) {
        width: 100%;
        padding-bottom: 140px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 250px;
    }
`;

export const ProductContainerTittle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;

    text-transform: capitalize;
    margin-bottom: 47px;

    @media (min-width: 640px) {
        font-size: 26px;
        line-height: 35px;
    }
`;

export const ContinueShoppingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;

    @media (min-width: 440px) {
        display: none;
    }
`;

export const ContinueShoppingSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.main.logo};
`;

export const AngleWrapper = styled.div`
    transform: rotate(180deg);
`;
