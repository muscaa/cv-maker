export interface TextFieldProps {
    id?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextField(options: TextFieldProps) {
    return (
        <input
            id={options.id}
            type={options.type}
            name={options.name}
            placeholder={options.placeholder}
            className={`appearance-none placeholder-text-2 outline-none p-3
                bg-background-4 bg-opacity-25 backdrop-blur-sm rounded-md
                border border-background-4 border-opacity-25 w-full
                ${options.className}`}
            onChange={options.onChange}
        />
    );
}
