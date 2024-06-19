import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0px;
    z-index: 100;
    width: 100%;

    padding: 50px 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;
    background-color: var(--bg-color);
`;

export const MenuOption = styled.span`
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: var(--color-primary);
    text-transform: uppercase;

    &:hover {
        color: var(--color-logo);
    }
`;
