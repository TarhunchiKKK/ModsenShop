import { describe, expect, test } from "@jest/globals";
import { IProduct, PRODUCT_SORT_ORDERS } from "../../src/types";
import { filterProducts } from "../../src/utils/products/filterProducts";
import { getSortCompareer } from "../../src/utils/products/getSortCompareer";
import { mockProducts } from "../mocks";

describe("Filter products", () => {
    test("Fitering by product title", () => {
        const title: string = "A";

        const filteredProducts: IProduct[] = filterProducts(mockProducts, {
            title: title,
            category: "",
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: 0,
            maxPrice: Infinity,
        });

        for (const product of filteredProducts) {
            expect(product.title.toLowerCase().includes(title.toLowerCase())).toBe(true);
        }
    });

    test("Filtering by category", () => {
        const category: string = "jewelery";

        const filteredProducts: IProduct[] = filterProducts(mockProducts, {
            title: "",
            category: category,
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: 0,
            maxPrice: Infinity,
        });

        for (const product of filteredProducts) {
            expect(product.category).toMatch(category);
        }
    });

    test("Sorting", () => {
        const sortOrders: PRODUCT_SORT_ORDERS[] = Object.values(PRODUCT_SORT_ORDERS);
        for (const sortOrder of sortOrders) {
            const sortedProducts: IProduct[] = filterProducts(mockProducts, {
                title: "",
                category: "",
                sortOrder: sortOrder,
                minPrice: 0,
                maxPrice: Infinity,
            });

            const sortCompareer = getSortCompareer(sortOrder);

            for (let i = 0; i < sortedProducts.length - 1; i++) {
                expect(sortCompareer(sortedProducts[i], sortedProducts[i + 1])).toBeLessThan(0);
            }
        }
    });

    test("Filterign by min and max price", () => {
        const minPrice: number = 50;
        const maxPrice: number = 150;

        const filteredProducts: IProduct[] = filterProducts(mockProducts, {
            title: "",
            category: "",
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: minPrice,
            maxPrice: maxPrice,
        });

        for (const product of filteredProducts) {
            expect(product.price >= minPrice && product.price <= maxPrice).toBe(true);
        }
    });

    test("Filtering with multiple parameters", () => {
        const title: string = "A";
        const category: string = "jewelery";
        const minPrice: number = 50;
        const maxPrice: number = 150;

        const filteredProducts: IProduct[] = filterProducts(mockProducts, {
            title: title,
            category: category,
            sortOrder: PRODUCT_SORT_ORDERS.PRICE_ASC,
            minPrice: minPrice,
            maxPrice: maxPrice,
        });

        for (const product of filteredProducts) {
            expect(product.title.toLowerCase().includes(title.toLowerCase())).toBe(true);
            expect(product.category).toMatch(category);
            expect(product.price >= minPrice && product.price <= maxPrice).toBe(true);
        }

        for (let i = 0; i < filteredProducts.length - 1; i++) {
            expect(filteredProducts[i].price <= filteredProducts[i + 1].price).toBe(true);
        }
    });
});
