export interface TextProps {
    text: string;
}

export default function Text(props: TextProps) {
    return (
        <p className="size-full flex-shrink flex-grow">
            {props.text}
        </p>
    );
}
