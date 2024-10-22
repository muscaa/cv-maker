import Divider from "./Divider";
import Empty from "./Empty";

export interface TemplateCardProps {
    name: string;
    author: string;
    version: string;
    description: string;
    tags: string[];
}

export default function TemplateCard(props: TemplateCardProps) {
    return (
        <div
            className="
                flex flex-col gap-1
                bg-background-3 bg-opacity-25
                shadow-md shadow-shadow
                rounded-xl p-3
            "
        >
            <h4>{props.name}</h4>
            <Divider />
            <div className="flex gap-1 text-text-4">
                <h6>{props.version}</h6>
                <Divider />
                <h6>{props.author}</h6>
            </div>
            <h5 className="text-text-3">{props.description}</h5>
            <Empty />
            <div className="flex flex-wrap gap-1">
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
        </div>
    );
}
