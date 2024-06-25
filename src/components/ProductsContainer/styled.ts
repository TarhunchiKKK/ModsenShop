import { styled } from "styled-components";

export const Wrapper = styled.div<{ $scalingKoefficient: number }>`
    font-size: ${(props) => props.$scalingKoefficient}px;
    display: grid;
    grid-template-columns: repeat(2, ${({ theme }) => theme.productImageSize[320]});
    justify-content: space-between;

    @media (min-width: 440px) {
        grid-template-columns: repeat(2, ${({ theme }) => theme.productImageSize[440]});
    }

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, ${({ theme }) => theme.productImageSize[640]});
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, ${({ theme }) => theme.productImageSize[768]});
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, ${({ theme }) => theme.productImageSize[1024]});
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(3, ${({ theme }) => theme.productImageSize[1280]});
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(3, ${({ theme }) => theme.productImageSize[1440]});
    }
`;
