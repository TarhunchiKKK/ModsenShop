import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store";
import { GlobalStyle, router, Themes } from "./constants";

export function App() {
    const { theme } = useAppSelector((state) => state.theme);

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
