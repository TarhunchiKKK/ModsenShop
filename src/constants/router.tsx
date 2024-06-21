import { createBrowserRouter } from "react-router-dom";
import { ContactPage, ErrorPage, Layout } from "@/pages";
import { routes } from "./routes";

export const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <ContactPage />
            },
            {
                path: routes.contact,
                element: <ContactPage />
            }
        ]
    }
]);
