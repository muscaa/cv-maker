export interface InputFieldProps {
    id?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputField(props: InputFieldProps) {
    return (
        <input
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={`appearance-none placeholder-text-2 outline-none p-3
                bg-background-4 bg-opacity-25 rounded-md
                border border-background-4 border-opacity-25 w-full
                ${props.className}`}
            onChange={props.onChange}
        />
    );
}
