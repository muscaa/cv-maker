export interface ButtonProps {
    text: string;
    disabled?: boolean;
    onAction?: () => void;
    className?: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            type="button"
            className={`
                appearance-none outline-none
                bg-primary hover:bg-primary-light active:bg-primary disabled:bg-background-4 disabled:hover:bg-background-4
                shadow-md shadow-shadow
                rounded-xl p-3
                transition-colors duration-200 ease-in-out
                ${props.className}
            `}
            disabled={props.disabled}
            onClick={props.onAction}
        >
            {props.text}
        </button>
    );
}
