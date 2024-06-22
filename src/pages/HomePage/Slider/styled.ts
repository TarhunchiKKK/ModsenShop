import { styled } from "styled-components";

export const SliderContentWrapper = styled.div`
    width: 100%;
    height: 354px;
    border-radius: 8px;
    overflow-y: hidden;
    overflow-x: auto;

    display: flex;

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
`;

export const SliderWrapper = styled.div`
    position: relative;
`;

export const DotsWrapper = styled.ul`
    position: absolute;
    z-index: 50;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);

    width: 47px;
    height: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Dot = styled.li`
    width: 4px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
`;

export const CurretnDot = styled.li`
    width: 7px;
    height: 7px;
    border: 0.75px solid #ffffff;
    border-radius: 50%;
    cursor: pointer;
`;

export const ImageWrapper = styled.div`
    min-width: 100%;
    height: 100%;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const ProductInfoWrapper = styled.div``;

export const ProductTitle = styled.h3``;

export const ProductPrice = styled.span``;

export const Button = styled.button``;
