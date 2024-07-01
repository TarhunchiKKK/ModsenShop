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
    height: i20px;
    border: ${(props) =>
        props.$isActive ? `1px solid ${props.theme.colors.neutral.lightGray}` : "none"};
    border-radius: 8px;

    cursor: pointer;
    &:hover {
        border: ${({ theme }) => theme.colors.neutral.lightGray};
    }
`;

export const CurrentImageWrapper = styled.div`
    width: 540px;
    height: 600px;
    border-radius: 8px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
`;
