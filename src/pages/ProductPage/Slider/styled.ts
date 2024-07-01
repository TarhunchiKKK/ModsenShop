import { styled } from "styled-components";

export const Wrapper = styled.div<{ $currentSlide: number }>`
    position: relative;
    height: 374px;

    padding-bottom: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.gray};

    &::after {
        content: "";
        position: absolute;
        width: 25%;
        top: calc(100% - 1px);
        left: ${(props) => props.$currentSlide * 25}%;

        border: 2px solid ${({ theme }) => theme.colors.neutral.darkGray};
        border-radius: 6px;
    }

    @media (min-width: 470px) {
        height: 450px;
    }

    @media (min-width: 768px) {
        padding-bottom: 80px;
        height: 600px;
    }

    @media (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 39px;

        padding-bottom: 0px;
        border-bottom: none;

        &::after {
            display: none;
        }
    }
`;

export const ImagesColumn = styled.div`
    width: 120px;
    height: 100%;

    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ColumnImageWrapper = styled.div<{ $isActive: boolean }>`
    width: 120px;
    height: 120px;
    overflow: hidden;
    border: ${(props) =>
        props.$isActive ? `2px solid ${props.theme.colors.neutral.darkGray}` : "none"};
    border-radius: 8px;

    cursor: pointer;
    &:hover {
        border: 2px solid
            ${(props) =>
                props.$isActive
                    ? props.theme.colors.neutral.darkGray
                    : props.theme.colors.neutral.gray};
    }
`;

export const CurrentImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 400px;
        height: 100%;
    }

    @media (min-width: 1024px) {
        width: 540px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
`;
