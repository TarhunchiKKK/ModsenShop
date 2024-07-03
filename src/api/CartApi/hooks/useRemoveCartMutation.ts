import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { removeProductFromLocalStorage, useAppSelector } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "@/api/constants";

export function useRemoveCartMutation() {
    const { firestore } = useContext(FirebaseContext);
    const [isError, setIsError] = useState<boolean>(false);

    const dispatch = useDispatch();
    const products = useAppSelector((state) => state.cart.products);

    async function removeCart(id: number) {
        try {
            setIsError(false);

            const storedProduct = products.find((p) => p.data.id === id);
            if (!storedProduct) {
                throw new Error("Product not fount");
            }

            await updateDoc(doc(firestore, CARTS_PATH, storedProduct.id), {
                capital: deleteField(),
            });

            dispatch(removeProductFromLocalStorage(storedProduct.data.id));
        } catch (error: unknown) {
            setIsError(true);
            console.error("Error removing document: ", error);
        }
    }

    return [removeCart, { isError }] as const;
}
