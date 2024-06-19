import { styled } from "styled-components";

export const StyledForm = styled.form`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 62px;

    @media (min-width: 640px) {
        margin-top: 0px;
    }
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
    width: 100%;
    padding: 16px 0px;
    margin-top: 24px;

    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;

    border: none;
    border-radius: 4px;
    color: var(--bg-color);
    background-color: var(--color-primary);

    cursor: pointer;

    @media (min-width: 440px) {
        width: 80%;
        margin-top: 70px;
    }

    @media (min-width: 768px) {
        margin-top: 112px;
        width: 500px;
    }
`;
