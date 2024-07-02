import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { FirebaseContext } from "@/firebase";
import { CARTS_PATH } from "@/firebase/constants";
import { removeProductFromLocalStorage, useAppSelector } from "@/store";

export function useRemoveCartMutation() {
    const { database } = useContext(FirebaseContext);
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

            await updateDoc(doc(database, CARTS_PATH, storedProduct.id), {
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
