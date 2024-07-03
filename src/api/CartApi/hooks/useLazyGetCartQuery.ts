import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { saveProductsToLocalStorage, useAppSelector } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "@/api/constants";
import { IProduct } from "@/types";

export function useLazyGetCartsQuery() {
    const dispatch = useDispatch();

    const { products } = useAppSelector((state) => state.cart);

    const { firestore } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    const fetchCarts = useCallback(
        async (userId: string) => {
            try {
                setIsError(false);

                const querySnapshot = await getDoc(doc(firestore, CARTS_PATH, userId));

                if (querySnapshot.exists()) {
                    dispatch(
                        saveProductsToLocalStorage(querySnapshot.data().products as IProduct[]),
                    );
                } else {
                    dispatch(saveProductsToLocalStorage([]));
                }
            } catch (error: unknown) {
                setIsError(true);
                console.error("Error fetching documents: ", error);
            }
        },
        [dispatch, firestore],
    );

    return [fetchCarts, { products, isError }] as const;
}
