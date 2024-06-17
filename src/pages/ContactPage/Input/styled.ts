import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input`
    width: 100%;

    outline: none;
    border: none;
    border-bottom: 1px solid #d8d8d8;
    background: inherit;

    font-family: var(--font-primary);
    font-size: 16px;
    color: var(--color-secondary);
`;

export const ErrorMessage = styled.span`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;

    color: var(--color-error);
    font-family: var(--font-primary);
    font-weight: 300;
    font-size: 14px;
`;
