import * as SVG from "@/SVG";

export interface IconSquareButtonProps {
    text: string;
    icon: SVG.Component;
    onAction?: () => void;
}

export default function IconSquareButton(props: IconSquareButtonProps) {
    return (
        <button
            type="button"
            className="
                appearance-none outline-none p-3 rounded-xl
                bg-background-4 bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-25
                shadow-md shadow-shadow
                transition-colors duration-200 ease-in-out
                size-24 sm:size-32 lg:size-40
            "
            onClick={props.onAction}
        >
            <div className="flex flex-col size-full">
                <div className="flex h-[60%]">
                    <props.icon className="size-full text-text-2" />
                </div>
                <div className="flex h-full justify-center items-center">
                    <p>{props.text}</p>
                </div>
            </div>
        </button>
    );
}
