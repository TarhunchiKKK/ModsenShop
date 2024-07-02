import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { IProduct } from "@/types";
import { CARTS_PATH } from "@/firebase/constants";
import { FirebaseContext } from "../../FirebaseContext";

export function useCreateCartMutation(product: IProduct) {
    const { database } = useContext(FirebaseContext);

    const [cartId, setCartId] = useState<string | undefined>(undefined);
    const [isError, setIsError] = useState<boolean>(false);

    async function createCart() {
        try {
            setIsError(false);

            const documentRef = await addDoc(collection(database, CARTS_PATH), {
                title: product.title,
                price: product.price,
                image: product.image,
            });

            console.log(`Document written with id=${documentRef.id}`);
            setCartId(documentRef.id);
        } catch (error: unknown) {
            setIsError(true);
            console.error("Error adding document: ", error);
        }
    }

    return [createCart, { cartId, isError }];
}
