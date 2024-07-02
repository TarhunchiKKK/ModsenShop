import { styled } from "styled-components";

export const Section = styled.section`
    padding: 24px 16px 72px;

    @media (min-width: 540px) {
        padding: 55px 0px 80px;
    }

    @media (min-width: 1024px) {
        padding: 113px 0px 250px;
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 36px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const FormWrapper = styled.div`
    position: relative;

    @media (min-width: 1024px) {
        position: sticky;
        top: 20px;
    }
`;
