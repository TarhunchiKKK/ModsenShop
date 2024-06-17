import styled from "styled-components";

export const StyledTitle = styled.h2`
    font-family: var(--font-primary);
    font-size: 22px;
    font-weight: 500;

    @media (min-width: 440px) {
        font-size: 26px;
    }

    @media (min-width: 768px) {
        font-size: 33px;
    }
`;
