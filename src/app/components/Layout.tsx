export interface LayoutProps {
    children?: React.ReactNode;
    alignX?: "left" | "center" | "right" | "between" | "around" | "evenly";
    alignY?: "top" | "center" | "bottom";
}

const alignXs = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",

    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
};
const alignYs = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
};

export function Block(props: LayoutProps) {
    return (
        <div className="block gap-2">
            {props.children}
        </div>
    );
}

export function Rows(props: LayoutProps) {
    const alignX = props.alignX ? alignXs[props.alignX] : "";
    const alignY = props.alignY ? alignYs[props.alignY] : "";

    return (
        <div className={`flex flex-row flex-1 gap-2 ${alignX} ${alignY}`}>
            {props.children}
        </div>
    );
}

export function Cols(props: LayoutProps) {
    const alignX = props.alignX ? alignXs[props.alignX] : "";
    const alignY = props.alignY ? alignYs[props.alignY] : "";

    return (
        <div className={`flex flex-col flex-1 gap-2 ${alignX} ${alignY}`}>
            {props.children}
        </div>
    );
}
