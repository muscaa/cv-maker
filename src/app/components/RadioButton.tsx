export interface RadioButtonProps {
    name?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function RadioButton(props: RadioButtonProps) {
    return (
        <div className="flex p-4 w-full justify-center items-center relative">
            <input
                type="radio"
                className="
                    appearance-none outline-none peer w-5 h-5 cursor-pointer
                    bg-background-4 bg-opacity-25 rounded-full
                    border border-background-4 border-opacity-25
                    checked:border-primary
                    transition-colors duration-200 ease-in-out
                "
                name={props.name}
                checked={props.checked}
                onChange={props.onChange}
            />
            <div
                className="
                    absolute pointer-events-none
                    bg-primary opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100
                    w-3 h-3 rounded-full
                    transition-all duration-200 ease-in-out
                "
            >
            </div>
        </div>
    );
}
