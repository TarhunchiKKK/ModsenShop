import { describe, expect, test } from "@jest/globals";
import { IProduct, PRODUCT_SORT_ORDERS } from "../../src/types";
import { filterProducts } from "../../src/utils/products/filterProducts";
import { mockProducts } from "../mocks";

describe("Filter products", () => {
    test("Fitering by product title", () => {
        const title: string = "A";

        const filteredProduct: IProduct[] = filterProducts(mockProducts, {
            title: title,
            category: "",
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: 0,
            maxPrice: Infinity,
        });

        for (const product of filteredProduct) {
            expect(product.title.toLowerCase().includes(title.toLowerCase())).toBe(true);
        }
    });

    test("Filtering by category", () => {
        const category: string = "jewelery";

        const filteredProduct: IProduct[] = filterProducts(mockProducts, {
            title: "",
            category: category,
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: 0,
            maxPrice: Infinity,
        });

        for (const product of filteredProduct) {
            expect(product.category).toMatch(category);
        }
    });

    test("Sorting", () => {
        const sortOrder: PRODUCT_SORT_ORDERS = PRODUCT_SORT_ORDERS.PRICE_ASC;

        const sortedProduct: IProduct[] = filterProducts(mockProducts, {
            title: "",
            category: "",
            sortOrder: sortOrder,
            minPrice: 0,
            maxPrice: Infinity,
        });

        for (let i = 0; i < sortedProduct.length - 1; i++) {
            expect(sortedProduct[i].price <= sortedProduct[i + 1].price).toBe(true);
        }
    });

    test("Filterign by min and max price", () => {
        const minPrice: number = 50;
        const maxPrice: number = 150;

        const filteredProduct: IProduct[] = filterProducts(mockProducts, {
            title: "",
            category: "",
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: minPrice,
            maxPrice: maxPrice,
        });

        for (const product of filteredProduct) {
            expect(product.price >= minPrice && product.price <= maxPrice).toBe(true);
        }
    });
});
