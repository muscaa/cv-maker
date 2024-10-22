export interface TitleProps {
    text: string;
    className?: string;
}

export default function Title(props: TitleProps) {
    return (
        <h2 className={`${props.className}`}>
            {props.text}
        </h2>
    );
}
