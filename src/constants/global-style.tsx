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
        --text-color: #000000;
        --bg-color: #ffffff;
    }

    html.dark {
        --text-color: #ffffff;
        --bg-color: #000000;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }
`;
