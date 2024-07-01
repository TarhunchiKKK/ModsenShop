import { IProduct, PRODUCT_SORT_ORDERS } from "@/types";

export function getSortCompareer(sortOrder: PRODUCT_SORT_ORDERS) {
    switch (sortOrder) {
        case PRODUCT_SORT_ORDERS.TITLE_ASC:
            return (a: IProduct, b: IProduct) => a.title.localeCompare(b.title);
        case PRODUCT_SORT_ORDERS.TITLE_DESC:
            return (a: IProduct, b: IProduct) => b.title.localeCompare(a.title);
        case PRODUCT_SORT_ORDERS.PRICE_ASC:
            return (a: IProduct, b: IProduct) => a.price - b.price;
        case PRODUCT_SORT_ORDERS.PRICE_DESC:
            return (a: IProduct, b: IProduct) => b.price - a.price;
        case PRODUCT_SORT_ORDERS.RATE_ASC:
            return (a: IProduct, b: IProduct) => a.rating.rate - b.rating.rate;
        case PRODUCT_SORT_ORDERS.RATE_DESC:
            return (a: IProduct, b: IProduct) => b.rating.rate - a.rating.rate;
    }
}
