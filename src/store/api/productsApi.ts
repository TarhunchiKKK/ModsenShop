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
        getProductById: builder.query<IProduct, string | number>({
            query: (id: string | number) => ({
                url: `/${id}`,
            }),
        }),
        getProductsByCategory: builder.query<IProduct[], string>({
            query: (category: string) => ({
                url: `/category/${category}`,
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery } =
    productsApi;
