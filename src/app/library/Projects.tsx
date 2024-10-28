import * as Config from "@/Config";
import * as SVG from "@/SVG";

import Divider from "@/components/Divider";
import PanelDropdown from "@/components/PanelDropdown";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import LoadingFallback from "@/components/LoadingFallback";

import { useRouter } from "next/navigation";
import { useStorage } from "@/Hooks";

export default function Projects() {
    const router = useRouter();
    
    const [projects] = useStorage(Config.getProjects);

    return (
        <>
            <div className="flex justify-between items-center">
                <h3>Projects</h3>
                <Button text="New" onAction={() => router.push("/new-project")} />
            </div>
            <Divider />
            <PanelDropdown title="Browser Storage">
            <div className="flex flex-col size-full gap-2 p-2">
                    <LoadingFallback
                        values={projects}
                        onSuccess={(project, index) => (
                            <ProjectCard
                                key={index}
                                info={project.info}
                                buttons={[
                                    {
                                        icon: SVG.Edit,
                                    },
                                    {
                                        icon: SVG.Delete,
                                        className: "hover:text-error",
                                    },
                                ]}
                            />
                        )}
                    />
                </div>
            </PanelDropdown>
        </>
    );
}
