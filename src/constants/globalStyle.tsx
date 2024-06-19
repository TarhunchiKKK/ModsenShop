import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.colors.main.black};
    }
`;
