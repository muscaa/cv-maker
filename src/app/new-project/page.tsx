"use client";

import Main from "@/components/Main";
import Menu from "@/components/Menu";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import CheckBoxButton from "@/components/CheckBoxButton";
import PanelDropdown from "@/components/PanelDropdown";
import TemplateCard from "@/components/TemplateCard";
import { TemplateCardProps } from "@/components/TemplateCard";

import { useState } from "react";

export default function NewProject() {
    const templates: TemplateCardProps[] = [];
    for (let i = 0; i < 5; i++) {
        templates.push({
                name: "Template Name",
                author: "Author Name",
                version: "1.0.0",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus. Nullam nec purus. Nullam nec purus. Nullam nec purus. 
                Nullam nec purus. Curabitur nec sem vel sapien venenatis maximus. Nullam nec purus. Nullam nec purus. Nullam nec purus. Nullam nec purus.`,
                tags: [
                    "ATS Friendly", "Colorful", "Something", "Test",
                ],
                github: "https://www.google.com"
            });
    }

    const [selectedTemplate, setSelectedTemplate] = useState(-1);

    return (
        <Main>
            <Menu title="New Project">
                <InputField placeholder="Project Name" />
                <InputField placeholder="Tags (sepparated by comma)" />
                <PanelDropdown title={`Template: ${selectedTemplate !== -1 ? templates[selectedTemplate].name : "None"}`}>
                    <div className="flex flex-col gap-2 p-2 size-full max-h-96">
                        {templates.map((template, index) => (
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
                                    {...template}
                                />
                            </button>
                        ))}
                    </div>
                </PanelDropdown>
                <div className="flex">
                    <div className="flex items-center flex-1 gap-2">
                        <CheckBoxButton />
                        <p>Auto save in browser storage</p>
                    </div>
                    <Button text="Create" className="flex-1" />
                </div>
            </Menu>
        </Main>
    );
}
