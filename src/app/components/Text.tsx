export interface TextProps {
    text: string;
}

export default function Text(props: TextProps) {
    return (
        <p className="flex-1">
            {props.text}
        </p>
    );
}
