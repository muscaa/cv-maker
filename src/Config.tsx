import * as Utils from "./Utils";

interface ConfigValue {}

function get<T extends ConfigValue>(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
}

function set(key: string, value: ConfigValue) {
    localStorage.setItem(key, JSON.stringify(value));
}

function append(key: string, value: ConfigValue) {
    const array = get<ConfigValue[]>(key) ?? [];
    array.push(value);

    set(key, array);
}

//
// TEMPLATES
//

export interface TemplateInfo {
    name: string;
    author: string;
    version: string;
    description: string;
    tags: string[];
    github?: string;
}

export interface Template extends ConfigValue {
    info: TemplateInfo;
    type: "base64" | "url";
    data: string;
}

export function getTemplates() {
    return get<Template[]>("templates") ?? [];
}

export async function importTemplateFromArrayBuffer(arrayBuffer: ArrayBuffer) {
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

//
// PROJECTS
//

export interface ProjectInfo {
    name: string;
    scope: string;
    autoSave: boolean;
    date: Date;
}

export interface Project extends ConfigValue {
    info: ProjectInfo;
    template: Template;
    data: string;
}

export function getProjects() {
    return get<Project[]>("projects") ?? [];
}

export function createProject(name: string, scope: string, autoSave: boolean, template: Template) {
    const value: Project = {
        info: {
            name: name,
            scope: scope,
            autoSave: autoSave,
            date: new Date(),
        },
        template: template,
        data: "",
    };

    if (autoSave) {
        append("projects", value);
    }

    return value;
}
