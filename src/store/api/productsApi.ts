import { IProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products/api",

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL!,
    }),

    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], number>({
            query: (limit: number) => ({
                url: "",
                params: {
                    limit,
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
        getCategories: builder.query<string[], void>({
            query: () => ({
                url: "/categories",
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery } =
    productsApi;
