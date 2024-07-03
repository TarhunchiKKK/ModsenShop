import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./store";
import { GlobalStyle, router, Themes } from "./constants";
import { useEffect } from "react";
import { cartApi } from "./api";

export function App() {
    const { theme } = useAppSelector((state) => state.UI);
    const { user } = useAppSelector((state) => state.user);
    const [fetchCart] = cartApi.useLazyGetCartsQuery();

    useEffect(() => {
        if (user) {
            fetchCart(user.id);
        }
    }, [fetchCart, user]);

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
