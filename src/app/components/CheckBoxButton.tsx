export interface CheckBoxButtonProps {
    checked?: boolean;
    onAction?: (checked: boolean) => void;
}

export default function CheckBoxButton(props: CheckBoxButtonProps) {
    return (
        <div className="flex relative size-full">
            <input
                type="checkbox"
                className="
                    appearance-none outline-none peer w-5 h-5 cursor-pointer
                    bg-background-4 bg-opacity-25 rounded-md
                    border border-background-4 border-opacity-25
                    checked:bg-primary checked:border-primary
                    transition-colors duration-200 ease-in-out
                "
                checked={props.checked}
                onChange={(event) => props.onAction?.(event.target.checked)}
            />
            <div
                className="
                    absolute w-5 h-5 pointer-events-none
                    text-text-1 opacity-0 scale-0 peer-checked:opacity-100 peer-checked:scale-100
                    transition-all duration-200 ease-in-out
                    flex justify-center items-center
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="w-3.5 h-3.5"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                </svg>
            </div>
        </div>
    );
}
