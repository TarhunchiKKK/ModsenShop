import { styled } from "styled-components";

export const Form = styled.form`
    width: 100%;
    background-color: #efefef;
    padding: 7px 10px 5px;
    border: none;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
`;

export const Input = styled.input`
    width: 100%;
    flex-grow: 1;

    border: none;
    outline: none;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    background-color: inherit;
`;
