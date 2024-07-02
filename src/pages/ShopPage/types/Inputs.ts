import { PRODUCT_SORT_ORDERS } from "@/types";

export type Inputs = {
    title: string;
    category: string;
    sortOrder: PRODUCT_SORT_ORDERS;
    minPrice: number;
    maxPrice: number;
};
