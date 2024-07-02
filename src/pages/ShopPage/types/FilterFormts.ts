import { PRODUCT_SORT_ORDERS } from "@/types";

export type FilterFormInputs = {
    title: string;
    category: string;
    sortOrder: PRODUCT_SORT_ORDERS;
    minPrice: number;
    maxPrice: number;
};
