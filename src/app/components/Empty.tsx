export interface EmptyProps {
    className?: string;
}

export default function Empty(props: EmptyProps) {
    return (
        <div className={`min-w-2 min-h-2 ${props.className}`}></div>
    );
}
