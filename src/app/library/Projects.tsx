import * as Config from "@/Config";

import Divider from "@/components/Divider";
import PanelDropdown from "@/components/PanelDropdown";
import Button from "@/components/Button";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProjectEntryProps {
    name: string;
    date: string;
}

function ProjectEntry(props: ProjectEntryProps) {
    return (
        <button
            className="
                appearance-none outline-none
                flex items-center gap-2
                bg-background-4 bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-25
                shadow-md shadow-shadow
                p-3 rounded-xl
                transition-colors duration-200 ease-in-out
            "
        >
            <div className="flex flex-1">
                <h3>{props.name}</h3>
            </div>
            <Divider className="h-8" />
            <p>{props.date}</p>
        </button>
    );
}

export default function Projects() {
    const router = useRouter();
    
    const [projects, setProjects] = useState<Config.Project[] | null>(null);

    useEffect(() => {
        setProjects(Config.getProjects());
    }, []);

    return (
        <>
            <div className="flex justify-between items-center">
                <h3>Projects</h3>
                <Button text="New" onAction={() => router.push("/new-project")} />
            </div>
            <Divider />
            <PanelDropdown title="Browser Storage">
                <div className="flex flex-col gap-2 p-2">
                    {projects === null && (
                        <p>Loading...</p>
                    ) || projects!.length === 0 && (
                        <p>Nothing here</p>
                    ) || projects!.map((project, index) => (
                        <ProjectEntry key={index} name={project.name} date={project.date} />
                    ))}
                </div>
            </PanelDropdown>
        </>
    );
}
