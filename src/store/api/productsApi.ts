import { IProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products/api",

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL!
    }),

    endpoints: (builder) => ({
        getSliderImages: builder.query<IProduct[], void>({
            query: () => ({
                url: "",
                params: {
                    limit: 5
                }
            })
        })
    })
});

export const { useGetSliderImagesQuery } = productsApi;
