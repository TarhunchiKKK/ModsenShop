import { useEffect, useState } from "react";

const size: number = 440;

export function useBurgerLayout() {
    const [isBurgerVisible, setIsBurgerVisible] = useState<boolean>(window.innerWidth <= size);

    useEffect(() => {
        const resizeHandler = () => {
            const nextState: boolean = window.innerWidth <= size;
            if (nextState !== isBurgerVisible) {
                setIsBurgerVisible(nextState);
            }
        };

        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, [isBurgerVisible]);

    return { isBurgerVisible };
}
