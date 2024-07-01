import { styled } from "styled-components";

export const Wrapper = styled.div`
    min-width: 700px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImagesColumn = styled.div`
    width: 120px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    width: 540px;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
`;
