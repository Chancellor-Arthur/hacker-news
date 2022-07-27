import {useState} from "react";

export const useFetching = (callback: (...args: number[]) => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (...args: number[]) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (exception: any) {
            setError(exception.message);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error] as const;
};
