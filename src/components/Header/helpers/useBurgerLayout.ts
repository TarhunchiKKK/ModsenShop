import { useEffect, useState } from "react";

const size: number = 440;

export function useBurgerLayout() {
    const [isBurgerVisible, setIsBurgerVisible] = useState<boolean>(window.innerWidth <= size);

    useEffect(() => {
        const callback = () => {
            const nextState: boolean = window.innerWidth <= size;
            if (nextState !== isBurgerVisible) {
                setIsBurgerVisible(!isBurgerVisible);
            }
        };

        window.addEventListener("resize", callback);

        return () => window.removeEventListener("resize", callback);
    }, [isBurgerVisible]);

    return { isBurgerVisible };
}
