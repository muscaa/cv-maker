import { useState, useEffect } from "react";

export function useDebounce<T>(defaultValue: T, debounceCallback: (value: T) => void): [React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(defaultValue);

    useEffect(() => {
        const debounce = setTimeout(() => {
            debounceCallback(state);
        }, 1000)

        return () => clearTimeout(debounce)
    }, [state]);

    return [setState];
}
