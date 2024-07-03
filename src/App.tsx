import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store";
import { GlobalStyle, router, Themes } from "./constants";
import { cartApi } from "./firebase";
import { useEffect } from "react";

export function App() {
    const { theme } = useAppSelector((state) => state.theme);
    const [fetchCart] = cartApi.useLazyGetCartsQuery();

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
