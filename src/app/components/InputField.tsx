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
                border border-background-4 border-opacity-25
                ${props.className}
            `}
            placeholder={props.placeholder}
            onChange={(event) => props.onAction?.(event.target.value)}
        />
    );
}
