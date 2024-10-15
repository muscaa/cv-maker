import {
    useState,
    useRef,
    useEffect
} from "react";

import * as SVG from "../SVG";

export interface DropdownProps {
    options: string[];
    selected: number;
    onAction?: (option: string, index: number) => void;
    className?: string;
}

export default function Dropdown(props: DropdownProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.selected == -1 ? null : props.options[props.selected]);

    const handleSelect = (option: string, index: number) => {
        setCurrentValue(option);
        setIsOpen(false);

        props.onAction?.(option, index);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className={`relative ${props.className}`}>
            <button
                type="button"
                className="
                    appearance-none outline-none w-full p-3
                    flex items-center justify-between
                    bg-background-4 bg-opacity-25 rounded-xl
                    border border-background-4 border-opacity-25
                "
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentValue || "Select an option"}
                <SVG.Arrow className={`w-5 h-5 transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div
                    className="
                        absolute max-h-64 w-full mt-1 z-10
                        bg-background-4 bg-opacity-25 rounded-xl
                        border border-background-4 border-opacity-25
                        overflow-auto
                    "
                >
                    {props.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(option, index)}
                            className="
                                w-full p-3 text-left
                                hover:bg-primary rounded-xl
                                transition-colors duration-200 ease-in-out
                            "
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
