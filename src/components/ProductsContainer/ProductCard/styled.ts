import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.productImageSize[320]};
    margin-bottom: 6px;

    @media (min-width: 440px) {
        height: ${({ theme }) => theme.productImageSize[440]};
    }

    @media (min-width: 640px) {
        height: ${({ theme }) => theme.productImageSize[640]};
    }

    @media (min-width: 768px) {
        height: ${({ theme }) => theme.productImageSize[768]};
    }

    @media (min-width: 1024px) {
        height: ${({ theme }) => theme.productImageSize[1024]};
    }

    @media (min-width: 1280px) {
        height: ${({ theme }) => theme.productImageSize[1280]};
    }

    @media (min-width: 1440px) {
        height: ${({ theme }) => theme.productImageSize[1440]};
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-position: 100%;
    object-fit: cover;
`;

export const ProductTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.main.black};
    margin-bottom: 4px;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 26px;
    }
`;

export const ProductPrice = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.main.logo};

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 26px;
    }
`;
