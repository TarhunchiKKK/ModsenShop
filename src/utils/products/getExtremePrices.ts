import { IProduct } from "@/types";

export function getExtremePrices(products: IProduct[]) {
    let minPrice: number = Infinity;
    let maxPrice: number = 0;

    for (const product of products) {
        if (product.price < minPrice) {
            minPrice = product.price;
        }

        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    }

    return { minPrice, maxPrice };
}
