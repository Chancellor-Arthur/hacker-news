import {useState} from "react";

function getExceptionMessage(exception: unknown) {
    if (exception instanceof Error) return exception.message;
    return String(exception);
}

export const useFetching = (callback: (...args: number[]) => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (...args: number[]) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (exception) {
            setError(getExceptionMessage(exception));
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error] as const;
};
