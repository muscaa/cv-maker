export interface TextProps {
    text: string;
}

export default function Text(props: TextProps) {
    return (
        <p className="p-3 w-full">
            {props.text}
        </p>
    );
}
