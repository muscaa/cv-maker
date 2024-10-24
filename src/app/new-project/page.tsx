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

export default function NewProject() {
    const [templates] = useStorage(Config.getTemplates);

    const [projectName, setProjectName] = useState("");
    const [selectedTemplate, setSelectedTemplate] = useState(-1);
    const [autoSave, setAutoSave] = useState(true);

    return (
        <Main>
            <Menu title="New Project">
                <InputField placeholder="Project Name" onAction={setProjectName} />
                <PanelDropdown title={`Template: ${selectedTemplate !== -1 ? templates![selectedTemplate].info.name : "None"}`}>
                    <div className="flex flex-col gap-2 p-2 size-full max-h-96">
                        <LoadingFallback
                            values={templates}
                            onSuccess={(template, index) => (
                                <button
                                    key={index}
                                    className="appearance-none outline-none text-left"
                                    onClick={() => setSelectedTemplate(index)}
                                >
                                    <TemplateCard
                                        className={`
                                            hover:bg-background-4 hover:bg-opacity-25
                                            active:bg-background-3 active:bg-opacity-25
                                            border-2 ${selectedTemplate === index ? "border-primary" : "border-transparent"}
                                        `}
                                        info={template.info}
                                    />
                                </button>
                            )}
                        />
                    </div>
                </PanelDropdown>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex items-center flex-1 gap-2">
                        <CheckBoxButton checked={autoSave} onAction={setAutoSave} />
                        <p>Auto save in browser storage</p>
                    </div>
                    <Button text="Create" className="flex-1" />
                </div>
            </Menu>
        </Main>
    );
}
