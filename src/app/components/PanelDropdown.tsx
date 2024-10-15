import {
    useState,
    useRef
} from "react";

import * as SVG from "../SVG";

export interface PanelDropdownProps {
    title: string;
    children?: React.ReactNode;
}

export default function PanelDropdown(props: PanelDropdownProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div ref={ref} className="relative flex-1">
            <button
                type="button"
                className="
                    appearance-none outline-none w-full p-3
                    flex items-center justify-between
                    bg-background-4 bg-opacity-25 rounded-md
                    border border-background-4 border-opacity-25
                "
                onClick={() => setIsOpen(!isOpen)}
            >
                {props.title}
                <SVG.Arrow className={`w-5 h-5 transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div
                    className="
                        absolute max-h-96 w-full mt-1 z-10
                        bg-background-4 bg-opacity-25 rounded-md
                        border border-background-4 border-opacity-25
                        overflow-auto
                    "
                >
                    {props.children}
                </div>
            )}
        </div>
    );
}
