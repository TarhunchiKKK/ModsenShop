import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, theme } from "./constants";
import { ThemeProvider } from "styled-components";
import { setInitialColorTheme } from "./utils";
import { Provider } from "react-redux";
import { store } from "./store";
import { Footer, Header } from "./components";

setInitialColorTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <div style={{ marginBottom: "50px" }}></div>
                <Footer />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
