export interface CheckBoxButtonProps {
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function CheckBoxButton(props: CheckBoxButtonProps) {
    return (
        <div className="flex p-4 w-full justify-center items-center relative">
            <input
                type="checkbox"
                className="
                    appearance-none peer w-5 h-5 cursor-pointer rounded-md
                    border border-primary checked:bg-primary
                    transition-colors duration-200 ease-in-out
                "
                checked={props.checked}
                onChange={props.onChange}
            />
            <div
                className="
                    absolute text-text-1 opacity-0 peer-checked:opacity-100 pointer-events-none
                    transition-opacity duration-200 ease-in-out
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                    className="w-3.5 h-3.5"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                </svg>
            </div>
        </div>
    );
}
