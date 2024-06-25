import { IProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetProductsOptions } from "../types";

export const productsApi = createApi({
    reducerPath: "products/api",

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL!,
    }),

    endpoints: (builder) => ({
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

export const { useGetProductsQuery } = productsApi;
