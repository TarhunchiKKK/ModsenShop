import { useAppSelector } from "@/store";
import { IProduct } from "@/types";

export function useProductIncart(product: IProduct) {
    const { products } = useAppSelector((state) => state.cart);

    const storedProducts: IProduct[] = products.map((product) => product.data);

    const isInCart: boolean = storedProducts.find((p) => p.id === product.id) !== undefined;

    return isInCart;
}
