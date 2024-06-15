import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, theme } from "./constants";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { setInitialColorTheme } from "./utils";
import { Provider } from "react-redux";
import { store } from "./store";

setInitialColorTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
