import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { IProduct } from "@/types";
import { CARTS_PATH } from "@/firebase/constants";
import { FirebaseContext } from "../../FirebaseContext";
import { useDispatch } from "react-redux";
import { addProductToLocalStorage } from "@/store";

export function useCreateCartMutation() {
    const dispatch = useDispatch();

    const { database } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    async function createCart(product: IProduct) {
        try {
            setIsError(false);

            const documentRef = await addDoc(collection(database, CARTS_PATH), {
                title: product.title,
                price: product.price,
                image: product.image,
            });

            dispatch(addProductToLocalStorage({ data: product, id: documentRef.id }));
        } catch (error: unknown) {
            setIsError(true);
            console.error("Error adding document: ", error);
        }
    }

    return [createCart, { isError }] as const;
}
