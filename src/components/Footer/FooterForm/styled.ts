import styled from "styled-components";

export const Form = styled.form`
    width: 396px;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--color-primary);
    padding-bottom: 13px;
    background: inherit;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    color: var(--color-secondary);
`;

export const Button = styled.button`
    position: absolute;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    background: none;
    border: none;
`;

export const ErrorMessage = styled.span`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    color: ${({ theme }) => theme.colors.error};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 300;
    font-size: 14px;
`;
