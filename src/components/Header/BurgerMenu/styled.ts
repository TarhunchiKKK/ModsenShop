import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0px;
    z-index: 150;
    width: 100%;

    padding: 50px 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    background-color: ${({ theme }) => theme.background};
`;

export const MenuOption = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    text-transform: uppercase;

    &:hover {
        color: ${({ theme }) => theme.colors.neutral.darkGray};
        transition: ${({ theme }) => theme.transitions.links};
    }
`;
