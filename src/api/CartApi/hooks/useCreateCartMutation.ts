import { useContext, useState } from "react";
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

    async function createCart(product: IProduct) {
        try {
            setIsError(false);

            const documentRef = await addDoc(collection(firestore, CARTS_PATH), {
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
