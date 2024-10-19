import { useState } from "react";

export interface TabProps {
    options: string[];
    selected: number;
    onAction?: (option: string, index: number) => void;
    className?: string;
}

export default function Tab(props: TabProps) {
    const [currentValue, setCurrentValue] = useState(props.selected);

    const handleSelect = (option: string, index: number) => {
        setCurrentValue(index);

        props.onAction?.(option, index);
    };

    return (
        <div
            className={`
                flex items-center justify-around gap-2
                ${props.className}
            `}
        >
            {props.options.map((option, index) => (
                <button
                    key={index}
                    type="button"
                    className={`
                        w-full
                        appearance-none outline-none p-3 rounded-xl
                        bg-background-4 ${currentValue !== index ? "bg-opacity-25" : "bg-opacity-75"}
                        shadow-md shadow-shadow
                        transition-colors duration-200 ease-in-out
                    `}
                    onClick={() => handleSelect(option, index)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
