import { useAppSelector } from "@/store";
import { IProduct } from "@/types";

export function useProductIncart(product: IProduct) {
    const { products } = useAppSelector((state) => state.cart);

    const isInCart: boolean = products.find((p) => p.id === product.id) !== undefined;

    return isInCart;
}
