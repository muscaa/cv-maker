export interface InputAreaProps {
    placeholder?: string;
    onAction?: (text: string) => void;
}

export default function InputArea(props: InputAreaProps) {
    return (
        <textarea
            className="
                appearance-none outline-none min-h-32 p-3 placeholder-text-2
                bg-background-4 bg-opacity-25 rounded-md
                border border-background-4 border-opacity-25
                size-full
            "
            placeholder={props.placeholder}
            onChange={(event) => props.onAction?.(event.target.value)}
        />
    );
}
