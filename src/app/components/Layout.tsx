export interface LayoutProps {
    children: React.ReactNode;
    alignX?: "left" | "center" | "right";
    alignY?: "top" | "center" | "bottom";
}

const alignXs = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
const alignYs = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
};

export function Min(props: LayoutProps) {
    const alignX = props.alignX ? alignXs[props.alignX] : "";
    const alignY = props.alignY ? alignYs[props.alignY] : "";

    return (
        <div className={`flex gap-2 ${alignX} ${alignY}`}>
            {props.children}
        </div>
    );
}

export function Max(props: LayoutProps) {
    const alignX = props.alignX ? alignXs[props.alignX] : "";
    const alignY = props.alignY ? alignYs[props.alignY] : "";

    return (
        <div className={`flex size-full gap-2 ${alignX} ${alignY}`}>
            {props.children}
        </div>
    );
}

export function Rows(props: LayoutProps) {
    const alignX = props.alignX ? alignXs[props.alignX] : "";
    const alignY = props.alignY ? alignYs[props.alignY] : "";

    return (
        <div className={`flex flex-row size-full gap-2 ${alignX} ${alignY}`}>
            {props.children}
        </div>
    );
}

export function Cols(props: LayoutProps) {
    const alignX = props.alignX ? alignXs[props.alignX] : "";
    const alignY = props.alignY ? alignYs[props.alignY] : "";

    return (
        <div className={`flex flex-col size-full gap-2 ${alignX} ${alignY}`}>
            {props.children}
        </div>
    );
}
