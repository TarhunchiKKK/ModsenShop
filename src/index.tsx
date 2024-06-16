import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./constants";
import { setInitialColorTheme } from "./utils";
import { Provider } from "react-redux";
import { store } from "./store";
import { ErrorPage } from "./pages/ErrorPage";

setInitialColorTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <ErrorPage />
        </Provider>
    </React.StrictMode>
);
