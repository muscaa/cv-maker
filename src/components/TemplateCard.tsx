import * as SVG from "@/SVG";
import * as Config from "@/Config";

import Divider from "./Divider";
import Empty from "./Empty";
import Tags from "./Tags";

import Link from "next/link";

export interface TemplateCardButton {
    icon: SVG.Component;
    onAction?: () => void;
    className?: string;
}

export interface TemplateCardProps {
    info: Config.TemplateInfo;
    onAction?: () => void;
    buttons?: TemplateCardButton[];
    className?: string;
}

export default function TemplateCard(props: TemplateCardProps) {
    return (
        <div
            onClick={props.onAction}
            className={`
                flex flex-col gap-1
                bg-background-3 bg-opacity-25
                ${
                    props.onAction
                        ? `
                        hover:bg-background-4 hover:bg-opacity-25
                        active:bg-background-3 active:bg-opacity-25
                        cursor-pointer select-none
                        ` : ""
                }
                shadow-md shadow-shadow
                rounded-xl p-3 h-full
                ${props.className}
            `}
        >
            <div className="flex justify-between items-center">
                <h4>{props.info.name}</h4>
                <div className="flex gap-1">
                    {props.buttons?.map((button, index) => (
                        <button
                            key={index}
                            onClick={button.onAction}
                            className={`
                                appearance-none outline-none
                                size-8 hover:scale-110
                                ${button.className}
                            `}
                        >
                            <button.icon className="size-full" />
                        </button>
                    ))}
                </div>
            </div>
            <Divider />
            <div className="flex gap-1 text-text-4">
                <h6>{props.info.version}</h6>
                <Divider />
                <h6>{props.info.author}</h6>
            </div>
            <h5 className="text-text-3">{props.info.description}</h5>
            <Empty />
            <div className="flex items-end gap-1 h-full">
                <div className="size-full">
                    <Tags tags={props.info.tags} className="w-full" />
                </div>
                
                {props.info.github && (
                    <>
                        <Divider className="h-full" />
                        <Link href={props.info.github} target="_blank" className="size-8 hover:scale-110">
                            <SVG.GitHub className="size-full" />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
