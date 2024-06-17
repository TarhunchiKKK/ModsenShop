import { styled } from "styled-components";

export const Section = styled.section`
    padding: 35px 0px 70px;

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
    padding: 0px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        padding: 0px;
    }

    @media (min-width: 1024px) {
        width: 908px;
    }
`;

export const Description = styled.p`
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: var(--color-primary);

    width: 300px;
    margin: 20px 0px 70px;

    @media (min-width: 440px) {
        font-size: 16px;
        width: 380px;
    }

    @media (min-width: 540px) {
        font-size: 18px;
    }

    @media (min-width: 768px) {
        width: 440px;
        font-size: 20px;
        margin: 39px 0px 108px;
        width: 561px;
    }
`;

export const Form = styled.form`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FirstInputsPairWrapper = styled.div`
    width: 100%;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 50px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 72px;
        margin-bottom: 94px;
    }

    @media (min-width: 1024px) {
        gap: 116px;
    }
`;

export const SecondInputsPairWrapper = styled(FirstInputsPairWrapper)`
    @media (min-width: 768px) {
        margin-bottom: 106px;
    }
`;

export const Button = styled.button`
    width: 80%;
    padding: 16px 0px;
    margin-top: 70px;

    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;

    color: var(--bg-color);
    background-color: var(--color-primary);

    cursor: pointer;

    @media (min-width: 768px) {
        margin-top: 112px;
        width: 500px;
    }
`;
