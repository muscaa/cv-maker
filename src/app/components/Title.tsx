export interface TitleProps {
    text: string;
}

export default function Title(props: TitleProps) {
    return (
        <h2 className="size-full">
            {props.text}
        </h2>
    );
}
