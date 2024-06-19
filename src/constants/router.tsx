import { createBrowserRouter } from "react-router-dom";
import { ContactPage, ErrorPage, Layout } from "@/pages";
import { Footer, Header } from "@/components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (
            <>
                <Header />
                <ErrorPage />
                <Footer />
            </>
        ),
        children: [
            {
                index: true,
                element: <ContactPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
]);
