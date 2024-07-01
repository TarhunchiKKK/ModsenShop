import { useEffect, useRef } from "react";

export function useEventListener<EventType extends Event>(
    eventType: string,
    callback: (e: EventType) => void,
    element: EventTarget,
) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (element === null) {
            return;
        }

        const eventHandler: EventListener = (e: Event) => callbackRef.current(e as EventType);

        element.addEventListener(eventType, eventHandler);

        return () => element.removeEventListener(eventType, eventHandler);
    }, [eventType, element]);
}
