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

export const TitleWrapper = styled.div`
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 39px;
    }
`;
