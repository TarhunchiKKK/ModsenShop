import { createBrowserRouter } from "react-router-dom";
import { ContactPage, ErrorPage, Layout } from "@/pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <ContactPage />
            }
        ]
    }
]);
