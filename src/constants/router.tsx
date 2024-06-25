import { createBrowserRouter } from "react-router-dom";
import { ContactPage, ErrorPage, Layout } from "@/pages";
import { HomePage } from "@/pages/HomePage";
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
                path: routes.contact,
                element: <ContactPage />,
            },
        ],
    },
]);
