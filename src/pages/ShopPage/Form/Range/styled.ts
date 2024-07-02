import { css, styled } from "styled-components";

const thumbStyle = css`
    width: 4px;
    height: 10px;
    pointer-events: auto;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.main.black};
`;

export const Slider = styled.div`
    width: 300px;
    border: 2px solid ${({ theme }) => theme.colors.neutral.gray};
    position: relative;
`;

export const Progress = styled.div<{ $left: number; $right: number }>`
    border: 2px solid ${({ theme }) => theme.colors.main.black};
    position: absolute;
    top: -2px;
    left: ${(props) => props.$left}%;
    right: ${(props) => props.$right}%;
`;

export const RangeInputsWrapper = styled.div`
    position: relative;
`;

export const RangeInput = styled.input`
    position: absolute;
    top: -5px;
    height: 5px;
    width: 100%;
    background: none;
    -webkit-appearance: none;
    pointer-events: none;

    &::-webkit-slider-thumb {
        ${thumbStyle}
        -webkit-appearance: none;
    }

    &::-moz-range-thumb {
        ${thumbStyle}
        -moz-appearance: none;
    }
`;

export const RangeFooter = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RangeSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
`;
