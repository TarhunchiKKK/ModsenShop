import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { FirebaseContextProvider } from "@/contexts";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <FirebaseContextProvider>
                <App />
            </FirebaseContextProvider>
        </Provider>
    </React.StrictMode>,
);
