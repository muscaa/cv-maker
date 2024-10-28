import * as Config from "@/Config";
import * as SVG from "@/SVG";

import Divider from "./Divider";

export interface ProjectCardButton {
    icon: SVG.Component;
    onAction?: () => void;
    className?: string;
}

export interface ProjectCardProps {
    info: Config.ProjectInfo;
    onAction?: () => void;
    buttons?: ProjectCardButton[];
    className?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
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
                                transition-all duration-200 ease-in-out
                                ${button.className}
                            `}
                        >
                            <button.icon className="size-full" />
                        </button>
                    ))}
                </div>
            </div>
            <Divider />
            <h6 className="text-text-4">{new Date(props.info.date).toDateString()}</h6>
            <h5 className="text-text-3">{props.info.description}</h5>
        </div>
    );
}
