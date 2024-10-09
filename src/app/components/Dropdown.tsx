import {
    useState,
    useRef,
    useEffect
} from "react";

export interface DropdownProps {
    options: string[];
    selected: number;
}

export default function Dropdown(props: DropdownProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.selected == -1 ? null : props.options[props.selected]);

    const handleSelect = (option: string, index: number) => {
        setCurrentValue(option);
        //onSelect(option, index);
        setIsOpen(false);
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
        <div ref={ref} className="w-full relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="
                    appearance-none outline-none w-full p-3
                    flex items-center justify-between
                    bg-background-4 bg-opacity-25 rounded-md
                    border border-background-4 border-opacity-25
                "
            >
                {currentValue || "Select an option"}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    fill="none"
                    stroke="currentColor"
                    className={`w-5 h-5 transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : ""}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div
                    className="
                        absolute max-h-64 w-full mt-1 z-10
                        bg-background-4 bg-opacity-25 rounded-md
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
                                hover:bg-primary rounded-md
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
