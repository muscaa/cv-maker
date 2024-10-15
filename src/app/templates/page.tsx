"use client";

import * as Utils from "../Utils";
import * as Config from "../Config";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Button from "../components/Button";
import PanelDropdown from "../components/PanelDropdown";

import { useState, useEffect } from "react";

function TitleBar() {
    const importTemplate = async () => {
        const file = await Utils.loadFile(".zip");
        const reader = new FileReader();
    
        reader.onload = () => {
            const arrayBuffer = reader.result as ArrayBuffer;
            Config.importTemplate(arrayBuffer);
        };
        reader.onerror = (error) => {
            console.error(error);
        };
    
        reader.readAsArrayBuffer(file);
    }

    return (
        <div className="flex flex-1 justify-end">
            <Button text="Import" onAction={importTemplate} />
        </div>
    );
}

interface TemplateEntryProps {
    template: Config.Template;
}

function TemplateEntry(props: TemplateEntryProps) {
    return (
        <p>{props.template.info.name}</p>
    );
}

export default function Templates() {
    const [templates, setTemplates] = useState<Config.Template[] | null>(null);

    useEffect(() => {
        setTemplates(Config.getTemplates());
    }, []);

    return (
        <Main>
            <Menu title="Templates" titleBar={<TitleBar />}>
                <PanelDropdown title="Browser Storage" open>
                    <div className="flex flex-col gap-2 p-2">
                        {templates === null && (
                            <p>Loading...</p>
                        ) || templates!.length === 0 && (
                            <p>Nothing here</p>
                        ) || templates!.map((template, index) => (
                            <TemplateEntry key={index} template={template} />
                        ))}
                    </div>
                </PanelDropdown>
            </Menu>
        </Main>
    );
}
