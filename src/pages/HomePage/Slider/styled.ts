import { styled } from "styled-components";

export const SliderWrapper = styled.div`
    width: 100%;
    height: 354px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    @media (min-width: 540px) {
        height: 430px;
    }

    @media (min-width: 768px) {
        height: 500px;
    }

    @media (min-width: 1024px) {
        height: 560px;
        border-radius: 12px;
    }

    @media (min-width: 1280px) {
        height: 600px;
    }

    @media (min-width: 1440px) {
        height: 646px;
        border-radius: 16px;
    }
`;

export const DotsWrapper = styled.ul`
    position: absolute;
    z-index: 50;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;

    @media (min-width: 540px) {
        gap: 10px;
    }

    @media (min-width: 768px) {
        gap: 13.7px;
    }
`;

export const Dot = styled.li`
    width: 4px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: 540px) {
        width: 6.5px;
        height: 6.5px;
    }

    @media (min-width: 768px) {
        width: 9.14px;
        height: 9.14px;
    }
`;

export const CurretnDot = styled.li`
    width: 7px;
    height: 7px;
    border: 0.75px solid #ffffff;
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: 540px) {
        width: 11px;
        height: 11px;
    }

    @media (min-width: 768px) {
        width: 16px;
        height: 16px;
    }
`;

export const ImageWrapper = styled.div<{ $index: number; $currentIndex: number }>`
    position: absolute;
    top: 0px;
    left: ${({ $index, $currentIndex }) => `${($index - $currentIndex) * 100}%`};

    min-width: 100%;
    height: 100%;
    transition: left 0.5s ease-in-out;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const ProductInfoWrapper = styled(ImageWrapper)`
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    padding: 0px 8px 26px;

    @media (min-width: 540px) {
        display: none;
    }
`;

export const ProductTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.main.white};
    margin-bottom: 3px;
`;

export const ProductPrice = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.main.white};
    margin-bottom: 10px;
`;

export const Button = styled.button`
    padding: 6px 9px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.main.white};
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.main.white};
    border-radius: 4px;

    text-transform: capitalize;
    cursor: pointer;
`;
