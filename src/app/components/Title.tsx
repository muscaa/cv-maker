export interface TitleProps {
    text: string;
}

export default function Title(props: TitleProps) {
    return (
        <h2 className="flex-1">
            {props.text}
        </h2>
    );
}
