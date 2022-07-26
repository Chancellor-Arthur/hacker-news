import {RefObject, useEffect, useRef} from "react";

export const useObserver = (ref: any, canLoad: boolean, isLoading: boolean, callback: () => void) => {
    const observer = useRef<IntersectionObserver>();
    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        const localCallback = function (entries: any[]) {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        }
        observer.current = new IntersectionObserver(localCallback);
        if (ref.current) {
            observer.current.observe(ref.current)
        }
    }, [isLoading]);
}