import { styled } from "styled-components";

export const IconWrapper = styled.div`
    position: relative;
    cursor: pointer;

    &:active {
        &::after {
            content: "";
            position: absolute;
            top: calc(100% + 10px);
            left: 0px;
            width: 100%;
            border: 2px solid ${({ theme }) => theme.colors.main.black};
            transition: ${({ theme }) => theme.transitions.buttons};
        }
    }
`;
