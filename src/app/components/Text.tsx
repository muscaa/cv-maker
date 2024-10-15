export interface TextProps {
    text: string;
    className?: string;
}

export default function Text(props: TextProps) {
    return (
        <p className={`${props.className}`}>
            {props.text}
        </p>
    );
}
