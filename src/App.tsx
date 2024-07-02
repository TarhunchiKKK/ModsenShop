import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store";
import { GlobalStyle, router, Themes } from "./constants";
import { RouterProvider } from "react-router-dom";
import { ShopPage } from "./pages";

export function App() {
    const { theme } = useAppSelector((state) => state.theme);

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyle />
            {/* <RouterProvider router={router} /> */}
            <ShopPage />
        </ThemeProvider>
    );
}
