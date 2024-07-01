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

export const ProductContainerWrapper = styled.div``;

export const ProductContainerTittle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    text-transform: capitalize;
    margin-bottom: 47px;
`;
