import * as Config from "../Config";

import Divider from "../components/Divider";
import PanelDropdown from "../components/PanelDropdown";
import Button from "../components/Button";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface TemplateEntryProps {
    template: Config.Template;
}

function TemplateEntry(props: TemplateEntryProps) {
    return (
        <p>{props.template.info.name}</p>
    );
}

/*async function importTemplateFromFile() {
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
}*/

export default function Templates() {
    const router = useRouter();

    const [templates, setTemplates] = useState<Config.Template[] | null>(null);

    useEffect(() => {
        setTemplates(Config.getTemplates());
    }, []);

    return (
        <>
            <div className="flex justify-between items-center">
                <h3>Templates</h3>
                <Button text="Import" onAction={() => router.push("/import-templates")} />
            </div>
            <Divider />
            <PanelDropdown title="Browser Storage">
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
        </>
    );
}
