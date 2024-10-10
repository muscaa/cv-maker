import React from "react";

export interface ButtonProps {
    text: string;
    disabled?: boolean;
    onAction?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            type="button"
            className="
                appearance-none outline-none p-3 bg-primary disabled:bg-background-4 rounded-md
                transition-colors duration-200 ease-in-out hover:bg-primary-light disabled:hover:bg-background-4
                active:bg-primary
                size-full
            "
            disabled={props.disabled}
            onClick={props.onAction}
        >
            {props.text}
        </button>
    );
}
