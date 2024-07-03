import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import {
    AuthPage,
    CartPage,
    ContactPage,
    ErrorPage,
    HomePage,
    Layout,
    ProductPage,
    ShopPage,
} from "@/pages";

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: routes.shop,
                element: <ShopPage />,
            },
            {
                path: `${routes.product}/:id`,
                element: <ProductPage />,
            },

            {
                path: routes.cart,
                element: <CartPage />,
            },
            {
                path: routes.contact,
                element: <ContactPage />,
            },
        ],
    },
    {
        path: routes.auth,
        element: <AuthPage />,
    },
]);
