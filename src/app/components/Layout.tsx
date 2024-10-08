export interface LayoutProps {
    children: React.ReactNode;
}

export interface FlexProps extends LayoutProps {

}

export function Rows(props: FlexProps) {
    return (
        <div className="flex flex-row gap-2">
            {props.children}
        </div>
    );
}

export function Cols(props: FlexProps) {
    return (
        <div className="flex flex-col gap-2">
            {props.children}
        </div>
    );
}

export interface GridProps extends LayoutProps {
    rows: number;
    cols: number;
}

export function Grid(props: GridProps) {
    return (
        <div
            className="grid gap-2"
            style={{
                gridTemplateRows: `repeat(${props.rows}, minmax(0, 1fr))`,
                gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))`
            }}
        >
            {props.children}
        </div>
    );
}
