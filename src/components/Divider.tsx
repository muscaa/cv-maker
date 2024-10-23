export interface DividerProps {
    className?: string;
}

export default function Divider(props: DividerProps) {
    return (
        <div
            className={`
                min-w-0.5 min-h-0.5
                bg-text-4
                shadow-md shadow-shadow
                ${props.className}
            `}
        >
        </div>
    );
}
