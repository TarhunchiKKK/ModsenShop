import { IProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetProductsOptions } from "../types";

export const productsApi = createApi({
    reducerPath: "products/api",

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL!,
    }),

    endpoints: (builder) => ({
        getSliderImages: builder.query<IProduct[], void>({
            query: () => ({
                url: "",
                params: {
                    limit: 5,
                },
            }),
        }),
        getProducts: builder.query<IProduct[], GetProductsOptions>({
            query: (options: GetProductsOptions) => ({
                url: "",
                params: {
                    ...options,
                },
            }),
        }),
    }),
});

export const { useGetSliderImagesQuery, useGetProductsQuery } = productsApi;
