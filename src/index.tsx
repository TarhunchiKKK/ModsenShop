import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./constants";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    </React.StrictMode>
);
