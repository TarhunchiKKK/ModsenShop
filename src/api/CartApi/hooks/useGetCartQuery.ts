import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { IProduct } from "@/types";
import { saveProductsToLocalStorage, useAppSelector } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "../../constants";

export function useGetCartsQuery(userId: string) {
    const dispatch = useDispatch();

    const { products } = useAppSelector((state) => state.cart);

    const { firestore } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchCarts() {
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
        }

        fetchCarts();
    });

    return { products, isError };
}
