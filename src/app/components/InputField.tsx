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
            className={`appearance-none outline-none w-full p-3 placeholder-text-2
                bg-background-4 bg-opacity-25 rounded-md
                border border-background-4 border-opacity-25
                ${props.className}`}
            onChange={props.onChange}
        />
    );
}
