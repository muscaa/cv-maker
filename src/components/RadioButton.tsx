export interface RadioButtonProps {
    group?: string;
    checked?: boolean;
    onAction?: (checked: boolean) => void;
    className?: string;
}

export default function RadioButton(props: RadioButtonProps) {
    return (
        <div className={`flex relative ${props.className}`}>
            <input
                type="radio"
                className="
                    appearance-none outline-none peer w-5 h-5 cursor-pointer
                    bg-background-4 bg-opacity-25 rounded-full
                    border-2 border-background-4 border-opacity-25
                    checked:border-primary
                    transition-colors duration-200 ease-in-out
                "
                name={props.group}
                checked={props.checked}
                onChange={(event) => props.onAction?.(event.target.checked)}
            />
            <div
                className="
                    absolute w-5 h-5 pointer-events-none
                    opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100
                    transition-all duration-200 ease-in-out
                    flex justify-center items-center
                "
            >
                <div
                    className="
                        bg-primary
                        w-2.5 h-2.5 rounded-full
                    "
                >
                </div>
            </div>
        </div>
    );
}
