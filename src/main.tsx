import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, router } from "./constants";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
