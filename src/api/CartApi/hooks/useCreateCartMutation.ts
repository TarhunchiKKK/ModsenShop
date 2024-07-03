import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { IProduct } from "@/types";
import { addProductToLocalStorage } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "../../constants";

export function useCreateCartMutation() {
    const dispatch = useDispatch();

    const { firestore } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    const createCart = useCallback(
        async (product: IProduct) => {
            try {
                setIsError(false);

                const documentRef = await addDoc(collection(firestore, CARTS_PATH), {
                    ...product,
                });

                dispatch(addProductToLocalStorage({ data: product, id: documentRef.id }));
            } catch (error: unknown) {
                setIsError(true);
                console.error("Error adding document: ", error);
            }
        },
        [dispatch, firestore],
    );

    return [createCart, { isError }] as const;
}
