"use client";

import * as Config from "@/Config";

import Main from "@/components/Main";
import Menu from "@/components/Menu";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import CheckBoxButton from "@/components/CheckBoxButton";
import PanelDropdown from "@/components/PanelDropdown";
import TemplateCard from "@/components/TemplateCard";
import LoadingFallback from "@/components/LoadingFallback";

import { useState } from "react";
import { useStorage } from "@/Hooks";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/Store";

export default function NewProject() {
    const router = useRouter();

    const [templates] = useStorage(Config.getTemplates);

    const [projectName, setProjectName] = useState("");
    const [projectScope, setProjectScope] = useState("");
    const [selectedTemplate, setSelectedTemplate] = useState(-1);
    const [autoSave, setAutoSave] = useState(true);

    const { setProject } = useProjectStore();

    const createProject = () => {
        if (projectName === "") {
            alert("Project name cannot be empty");
            return;
        }
        if (projectScope === "") {
            alert("Project scope cannot be empty");
            return;
        }
        if (selectedTemplate === -1) {
            alert("Please select a template");
            return;
        }

        const template = templates![selectedTemplate];
        const project = Config.createProject(projectName, projectScope, autoSave, template);

        setProject(project);

        router.push("/editor");
    };

    return (
        <Main>
            <Menu title="New Project">
                <InputField placeholder="Project Name" onAction={setProjectName} />
                <InputField placeholder="Project Scope" onAction={setProjectScope} />
                <PanelDropdown title={`Template: ${selectedTemplate !== -1 ? templates![selectedTemplate].info.name : "None"}`}>
                    <div className="flex flex-col gap-2 p-2 size-full max-h-96">
                        <LoadingFallback
                            values={templates}
                            onSuccess={(template, index) => (
                                <TemplateCard
                                    key={index}
                                    info={template.info}
                                    onAction={() => setSelectedTemplate(index)}
                                    className={`
                                        border-2 ${selectedTemplate === index ? "border-primary" : "border-transparent"}
                                    `}
                                />
                            )}
                        />
                    </div>
                </PanelDropdown>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex items-center flex-1 gap-2">
                        <CheckBoxButton checked={autoSave} onAction={setAutoSave} />
                        <p>Auto save in browser storage</p>
                    </div>
                    <Button className="flex-1" text="Create" onAction={createProject} />
                </div>
                <p>{projectName}</p>
            </Menu>
        </Main>
    );
}
