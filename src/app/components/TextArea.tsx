export interface TextAreaProps {
    id?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea(props: TextAreaProps) {
    return (
        <textarea
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            className={`resize-none min-h-32 appearance-none placeholder-text-2 outline-none p-3
                bg-background-4 bg-opacity-25 rounded-md
                border border-background-4 border-opacity-25 w-full
                ${props.className}`}
            onChange={props.onChange}
        />
    );
}
