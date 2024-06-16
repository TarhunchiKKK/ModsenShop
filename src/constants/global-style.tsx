import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    html.light {
        --color-primary: #000000;
        --color-secondary: #707070;
        --bg-color: #ffffff;
        --border-color-secondary: #000000;
    }

    html.dark {
        --color-primary: #ffffff;
        --color-secondary: #707070;
        --bg-color: #000000;
    }

    body {
        background-color: var(--bg-color);
        color: var(--color-primary);
    }
`;
