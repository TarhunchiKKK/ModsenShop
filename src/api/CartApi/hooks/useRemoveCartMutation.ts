import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { removeProductFromLocalStorage, useAppSelector } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "@/api/constants";

export function useRemoveCartMutation() {
    const { firestore } = useContext(FirebaseContext);
    const [isError, setIsError] = useState<boolean>(false);

    const dispatch = useDispatch();
    const { products } = useAppSelector((state) => state.cart);

    const removeCart = useCallback(
        async (userId: string, id: number) => {
            try {
                setIsError(false);

                const storedProduct = products.find((p) => p.id === id);
                if (!storedProduct) {
                    throw new Error("Product not fount");
                }

                await setDoc(doc(firestore, CARTS_PATH, userId), {
                    products: products.filter((p) => p.id !== storedProduct.id),
                });

                dispatch(removeProductFromLocalStorage(storedProduct.id));
            } catch (error: unknown) {
                setIsError(true);
                console.error("Error removing document: ", error);
            }
        },
        [dispatch, firestore, products],
    );

    return [removeCart, { isError }] as const;
}
