import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { IProduct } from "@/types";
import { CARTS_PATH } from "@/firebase/constants";
import { FirebaseContext } from "@/firebase/FirebaseContext";

export function useGetCartsQuery() {
    const { database } = useContext(FirebaseContext);

    const [data, setData] = useState<IProduct[] | undefined>(undefined);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchCarts() {
            try {
                setIsError(false);

                const querySnapshot = await getDocs(collection(database, CARTS_PATH));

                console.log(querySnapshot);
                // setData(querySnapshot);
                setData(undefined);
            } catch (error: unknown) {
                setIsError(true);
                console.error("Error fetching documents: ", error);
            }
        }

        fetchCarts();
    });

    return { data, isError };
}
