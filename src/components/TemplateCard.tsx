import * as SVG from "@/SVG";

import Divider from "./Divider";
import Empty from "./Empty";
import Tags from "./Tags";

import Link from "next/link";

export interface TemplateCardProps {
    name: string;
    author: string;
    version: string;
    description: string;
    tags: string[];
    github: string;
    className?: string;
}

export default function TemplateCard(props: TemplateCardProps) {
    return (
        <div
            className={`
                flex flex-col gap-1
                bg-background-3 bg-opacity-25
                shadow-md shadow-shadow
                rounded-xl p-3 h-full
                ${props.className}
            `}
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
            <div className="flex items-end gap-2 h-full">
                <div className="size-full">
                    <Tags tags={props.tags} className="w-full" />
                </div>
                <Divider className="h-full" />
                <Link href={props.github} target="_blank" className="size-10 hover:scale-110">
                    <SVG.GitHub className="size-full" />
                </Link>
            </div>
        </div>
    );
}
