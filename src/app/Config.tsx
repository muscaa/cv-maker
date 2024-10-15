import * as Utils from "./Utils";

function append(key: string, value: any) {
    const storedValue = localStorage.getItem(key);
    const array: any[] = storedValue ? JSON.parse(storedValue) : [];
    array.push(value);
    localStorage.setItem(key, JSON.stringify(array));
}

export interface TemplateInfo {
    name: string;
    author: string;
    version: string;
    description: string;
    tags: string[];
}

export interface Template {
    info: TemplateInfo;
    type: "base64" | "url";
    data: string;
}

export async function importTemplate(arrayBuffer: ArrayBuffer) {
    const unzipped = await Utils.readZip(arrayBuffer);
    const templateJson = unzipped.file("template.json");
    if (!templateJson) return false;

    const infoString = await templateJson.async("string");
    const info: TemplateInfo = JSON.parse(infoString);

    const value: Template = {
        info: info,
        type: "base64",
        data: Buffer.from(arrayBuffer).toString("base64"),
    };
    
    append("templates", value);

    return true;
}

export function getTemplates() {
    return JSON.parse(localStorage.getItem("templates") || "[]") as Template[];
}
