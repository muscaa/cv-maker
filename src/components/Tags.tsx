export interface TagsProps {
    tags: string[];
    className?: string;
}

export default function Tags(props: TagsProps) {
    return (
        <div
            className={`
                flex flex-wrap gap-1 size-full items-center
                ${props.className}
            `}
        >
            {props.tags.map((tag, index) => (
                <h6
                    key={index}
                    className="
                        text-secondary font-normal
                        bg-secondary bg-opacity-10
                        px-2 py-0.5 rounded-full
                        flex-grow text-center
                    "
                >
                    {tag}
                </h6>
            ))}
        </div>
    );
}
