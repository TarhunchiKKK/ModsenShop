import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Layout } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <ErrorPage />
            }
        ]
    }
]);
