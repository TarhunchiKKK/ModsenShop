import { IProduct, PRODUCT_SORT_ORDERS } from "@/types";
import { getSortCompareer } from "./getSortCompareer";

interface ProductsFilterOptions {
    title: string;
    category: string;
    sortOrder: PRODUCT_SORT_ORDERS;
    minPrice: number;
    maxPrice: number;
}

export function filterProducts(products: IProduct[], options: ProductsFilterOptions) {
    return products
        .filter(
            (product) =>
                product.title.toLowerCase().includes(options.title.toLowerCase()) &&
                product.category.toLowerCase().includes(options.category.toLowerCase()) &&
                product.price >= options.minPrice &&
                product.price <= options.maxPrice,
        )
        .sort(getSortCompareer(options.sortOrder));
}
