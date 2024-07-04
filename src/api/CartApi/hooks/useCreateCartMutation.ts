import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { IProduct } from "@/types";
import { addProductToLocalStorage, useAppSelector } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "../../constants";

export function useCreateCartMutation() {
    const dispatch = useDispatch();

    const { products } = useAppSelector((state) => state.cart);

    const { firestore } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    const createCart = useCallback(
        async (userId: string, product: IProduct) => {
            try {
                setIsError(false);

                await setDoc(doc(firestore, CARTS_PATH, userId), {
                    products: [...products, product],
                });

                dispatch(addProductToLocalStorage(product));
            } catch (error: unknown) {
                setIsError(true);
                console.error("Error adding document: ", error);
            }
        },
        [dispatch, products, firestore],
    );

    return [createCart, { isError }] as const;
}
