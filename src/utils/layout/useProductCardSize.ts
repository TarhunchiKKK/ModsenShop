import { useEffect, useState } from "react";

const breakpoints = {
    [320]: 136,
    [440]: 200,
    [640]: 200,
    [768]: 240,
    [1024]: 300,
    [1280]: 340,
    [1440]: 380,
};

export function useProductCardSize(parent: HTMLDivElement | null) {
    const [productImageSize, setProductImageSize] = useState<number>(breakpoints[320]);

    console.log(Object.values(breakpoints));

    useEffect(() => {
        const handleParentResize = () => {
            if (parent) {
                const currentSize = parent.offsetWidth;
                let newSize: number = 0;
                for (const breakpoint of Object.values(breakpoints)) {
                    console.log(breakpoint);
                    if (currentSize <= breakpoint) {
                        newSize = breakpoint;
                    }
                }
                console.log(newSize);
                if (newSize !== productImageSize) {
                    setProductImageSize(newSize);
                }
            }
        };

        console.log("Effect");
        parent?.addEventListener("resize", handleParentResize);

        return () => parent?.removeEventListener("resize", handleParentResize);
    }, [productImageSize, parent]);

    return { productImageSize };
}
