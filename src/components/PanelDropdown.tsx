import {
    useState
} from "react";

import * as SVG from "../SVG";

export interface PanelDropdownProps {
    title: string;
    open?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export default function PanelDropdown(props: PanelDropdownProps) {
    const [isOpen, setIsOpen] = useState(props.open ?? false);

    return (
        <div className={`flex flex-col ${props.className}`}>
            <button
                type="button"
                className="
                    appearance-none outline-none w-full p-3
                    flex items-center justify-between
                    bg-background-4 bg-opacity-25 rounded-xl
                    border-2 border-background-4 border-opacity-25
                "
                onClick={() => setIsOpen(!isOpen)}
            >
                {props.title}
                <SVG.Arrow className={`w-5 h-5 transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div
                    className="
                        h-full rounded-xl m-2
                        bg-background-2 bg-opacity-25
                        border-2 border-background-2 border-opacity-50
                        overflow-auto
                    "
                >
                    {props.children}
                </div>
            )}
        </div>
    );
}
