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
                    appearance-none peer w-5 h-5 cursor-pointer rounded-full
                    border border-primary
                "
                name={props.name}
                checked={props.checked}
                onChange={props.onChange}
            />
            <div
                className="
                    absolute bg-primary opacity-0 peer-checked:opacity-100 pointer-events-none
                    w-3 h-3 rounded-full
                    transition-opacity duration-200 ease-in-out
                "
            >
            </div>
        </div>
    );
}
