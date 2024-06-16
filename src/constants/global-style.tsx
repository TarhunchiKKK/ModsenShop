import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root {
        --font-primary: "DM Sans", sans-serif;
        --font-secondary: "Allerta Stencil", sans-serif;

        --color-logo: #A18A68;
        --color-error: red;

        --transition-links: all 0.5s;
    }

    html.light {
        --color-primary: #000000;
        --color-secondary: #707070;
        --bg-color: #ffffff;
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
