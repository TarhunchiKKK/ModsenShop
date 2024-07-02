import { useContext, useEffect, useState } from "react";
import { collection, CollectionReference, getDocs, QuerySnapshot } from "firebase/firestore";
import { IProduct } from "@/types";
import { CARTS_PATH } from "@/firebase/constants";
import { FirebaseContext } from "@/firebase/FirebaseContext";
import { useDispatch } from "react-redux";
import { saveProductsToLocalStorage, useAppSelector } from "@/store";
import { IStoredProduct } from "@/store/types";

export function useGetCartsQuery() {
    const dispatch = useDispatch();

    const { products } = useAppSelector((state) => state.cart);

    const { database } = useContext(FirebaseContext);

    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchCarts() {
            try {
                setIsError(false);

                const cartCollection = collection(database, CARTS_PATH) as CollectionReference<
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
