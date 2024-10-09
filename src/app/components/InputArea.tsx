export interface InputAreaProps {
    id?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function InputArea(props: InputAreaProps) {
    return (
        <textarea
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            className={`appearance-none outline-none min-h-32 w-full p-3 placeholder-text-2
                bg-background-4 bg-opacity-25 rounded-md
                border border-background-4 border-opacity-25
                ${props.className}`}
            onChange={props.onChange}
        />
    );
}
