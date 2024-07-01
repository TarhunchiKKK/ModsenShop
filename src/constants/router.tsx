import { createBrowserRouter } from "react-router-dom";
import { ContactPage, ErrorPage, HomePage, Layout, ProductPage } from "@/pages";
import { routes } from "./routes";

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
                path: `${routes.product}/:id`,
                element: <ProductPage />,
            },
            {
                path: routes.contact,
                element: <ContactPage />,
            },
        ],
    },
]);
