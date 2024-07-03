import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { collection, CollectionReference, getDocs, QuerySnapshot } from "firebase/firestore";
import { IProduct, IStoredProduct } from "@/types";
import { saveProductsToLocalStorage, useAppSelector } from "@/store";
import { CARTS_PATH } from "../../constants";
import { FirebaseContext } from "../../FirebaseContext";

export function useGetCartsQuery() {
    const dispatch = useDispatch();

    const { products } = useAppSelector((state) => state.cart);

    const { firestore } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
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

        fetchCarts();
    });

    return { products: products.map((product) => product.data), isError };
}
