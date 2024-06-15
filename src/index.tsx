import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, theme } from "./constants";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { setInitialColorTheme } from "./utils";

setInitialColorTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
        </ThemeProvider>
    </React.StrictMode>
);
