import { useEffect, useState } from "react";
import { useEventListener } from "./useEventListener";

export function useMediaQuery(mediaQuery: string) {
    const [isMatch, setIsMatch] = useState<boolean>(false);
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

    useEffect(() => {
        const list: MediaQueryList = window.matchMedia(mediaQuery);

        setMediaQueryList(list);

        setIsMatch(list.matches);
    }, [mediaQuery]);

    useEventListener<MediaQueryListEvent>("change", (e) => setIsMatch(e.matches), mediaQueryList);

    return { isMatch };
}
