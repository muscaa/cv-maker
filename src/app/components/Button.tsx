import React from "react";

export interface ButtonProps {
    id?: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    text: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            id={props.id}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            className={`appearance-none outline-none w-full p-3 bg-primary disabled:bg-background-4 rounded-md
                transition-colors duration-200 ease-in-out hover:bg-primary-light disabled:hover:bg-background-4
                active:bg-primary
                ${props.className}`}
        >
            {props.text}
        </button>
    );
}
