import * as Config from "@/Config";

import Divider from "./Divider";

export interface ProjectCardProps {
    info: Config.ProjectInfo;
    onAction?: () => void;
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
            <h4>{props.info.name}</h4>
            <Divider />
            <div className="flex gap-1 text-text-4">
                <h6>{props.info.date.toLocaleDateString()}</h6>
                <Divider />
                <h6>{props.info.scope}</h6>
            </div>
            <h5 className="text-text-3">{props.info.autoSave}</h5>
        </div>
    );
}
