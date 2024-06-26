import styled from "styled-components";

export const Form = styled.form`
    position: relative;
    width: 100%;

    @media (min-width: 500px) {
        width: 396px;
    }

    @media (min-width: 768px) {
        width: 300px;
    }

    @media (min-width: 1024px) {
        width: 396px;
    }
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.main.black};

    padding-bottom: 8px;
    background: inherit;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    @media (min-width: 500px) {
        padding-bottom: 13px;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 9px;
    right: 0px;
    cursor: pointer;
    background: none;
    border: none;

    @media (min-width: 500px) {
        top: 13px;
    }
`;

export const ErrorMessage = styled.span`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    color: ${({ theme }) => theme.colors.service.error};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 300;
    font-size: 14px;
`;

export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    margin-top: 16px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Checkbox = styled.input`
    width: 13px;
    height: 13px;

    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.neutral.darkGray};
`;
