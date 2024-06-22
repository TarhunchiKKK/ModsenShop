import { createBrowserRouter } from "react-router-dom";
import { ContactPage, ErrorPage, Layout } from "@/pages";
import { routes } from "./routes";
import { HomePage } from "@/pages/HomePage";

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: routes.contact,
                element: <ContactPage />
            }
        ]
    }
]);
