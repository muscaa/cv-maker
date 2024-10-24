export interface LoadingFallbackProps<T> {
    values: T[] | null;
    onSuccess: (value: T, index: number) => React.ReactNode;
}

export default function LoadingFallback<T>(props: LoadingFallbackProps<T>) {
    return (
        <>
            {props.values === null && (
                <p>Loading...</p>
            ) || props.values!.length === 0 && (
                <p>Nothing here</p>
            ) || props.values!.map((value, index) => props.onSuccess(value, index))}
        </>
    );
}
