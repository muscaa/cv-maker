import * as SVG from "../SVG";

export interface IconButtonProps {
    icon: SVG.Component;
    onAction?: () => void;
    className?: string;
}

export default function IconButton(props: IconButtonProps) {
    return (
        <button
            type="button"
            className={`
                appearance-none outline-none
                text-text-1 hover:text-primary-light active:text-primary
                transition-colors duration-200 ease-in-out
                size-6
                ${props.className}
            `}
            onClick={props.onAction}
        >
            <props.icon className="size-full" />
        </button>
    );
}
