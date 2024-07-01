import { styled } from "styled-components";

export const Wrapper = styled.div<{ $scalingKoefficient: number }>`
    font-size: ${(props) => props.$scalingKoefficient}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 16px;

    @media (min-width: 640px) {
        gap: 32px;
    }

    @media (min-width: 1280px) {
        gap: 54px;
    }
`;
