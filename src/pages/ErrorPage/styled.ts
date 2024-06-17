import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentText = styled.p`
    margin-top: 24px;
    margin-bottom: 64px;
    texp-aligh: center;
    width: 275px;

    font-family: var(--font-primary);

    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: var(--color-secondary);

    @media (min-width: 440px) {
        font-size: 16px;
    }

    @media (min-width: 540px) {
        font-size: 18px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

export const Button = styled.button`
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 700;

    background: none;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    text-decoration: uppercase;

    padding: 16px 49px;
    cursor: pointer;

    &:hover {
        background: var(--color-logo);
    }
`;
