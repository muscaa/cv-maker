export interface InputFieldProps {
    placeholder?: string;
    onAction?: (text: string) => void;
    className?: string;
}

export default function InputField(props: InputFieldProps) {
    return (
        <input
            type="text"
            className={`
                appearance-none outline-none p-3 placeholder-text-2
                bg-background-4 bg-opacity-25 rounded-xl
                shadow-md shadow-shadow
                border-2 border-background-4 border-opacity-25 focus:border-primary
                ${props.className}
            `}
            placeholder={props.placeholder}
            onChange={(event) => props.onAction?.(event.target.value)}
        />
    );
}
