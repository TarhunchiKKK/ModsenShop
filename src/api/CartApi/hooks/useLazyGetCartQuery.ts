import { useContext, useState } from "react";
import { collection, CollectionReference, getDocs, QuerySnapshot } from "firebase/firestore";
import { IProduct, IStoredProduct } from "@/types";
import { useDispatch } from "react-redux";
import { saveProductsToLocalStorage, useAppSelector } from "@/store";
import { FirebaseContext } from "@/contexts";
import { CARTS_PATH } from "@/api/constants";

export function useLazyGetCartsQuery() {
    const dispatch = useDispatch();

    const { products } = useAppSelector((state) => state.cart);

    const { firestore } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    async function fetchCarts() {
        try {
            setIsError(false);

            const cartCollection = collection(firestore, CARTS_PATH) as CollectionReference<
                IProduct,
                IProduct
            >;
            const querySnapshot: QuerySnapshot<IProduct, IProduct> = await getDocs<
                IProduct,
                IProduct
            >(cartCollection);

            const data: IStoredProduct[] = [];
            querySnapshot.forEach((document) => {
                data.push({ id: document.id, data: document.data() });
            });

            dispatch(saveProductsToLocalStorage(data));
        } catch (error: unknown) {
            setIsError(true);
            console.error("Error fetching documents: ", error);
        }
    }

    return [fetchCarts, { products: products.map((product) => product.data), isError }] as const;
}
