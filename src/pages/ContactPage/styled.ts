import { styled } from "styled-components";

export const Section = styled.section`
    padding: 39px 0px 96px;

    @media (min-width: 640px) {
        padding: 60px 0px 110px;
    }

    @media (min-width: 1024px) {
        padding: 100px 0px 210px;
    }

    @media (min-width: 1280px) {
        padding: 125px 0px 250px;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 95%;
    padding: 0px 15.5px;

    display: flex;
    flex-direction: column;
    align-items: start;

    @media (min-width: 640px) {
        align-items: center;
    }

    @media (min-width: 768px) {
        padding: 0px;
    }

    @media (min-width: 1024px) {
        width: 908px;
    }
`;

export const Description = styled.p`
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: var(--color-primary);

    width: 380px;
    display: none;
    margin: 20px 0px 70px;

    @media (min-width: 640px) {
        display: block;
    }

    @media (min-width: 768px) {
        width: 440px;
        font-size: 20px;
        margin: 39px 0px 108px;
        width: 561px;
    }
`;
