import styled from "styled-components";

export const StyledTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 26px;
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 33px;
    }
`;
