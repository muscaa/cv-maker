import * as Utils from "./Utils";

import { v7 as uuid } from "uuid";

interface ConfigValue {}

interface ConfigObject extends ConfigValue {
    uuid: string;
}

interface ConfigArray<T extends ConfigObject> extends ConfigValue {
    items: T[];
}

function newArray<T extends ConfigObject>(): ConfigArray<T> {
    return {
        items: [],
    };
}

function get<T extends ConfigValue>(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
}

function getOr<T extends ConfigValue>(key: string, defaultValue: T) {
    return get<T>(key) ?? defaultValue;
}

function getArray<T extends ConfigObject>(key: string) {
    return getOr<ConfigArray<T>>(key, newArray<T>()).items;
}

function set<T extends ConfigValue>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
}

function add<T extends ConfigObject>(key: string, value: T) {
    const array = getOr<ConfigArray<T>>(key, newArray<T>());
    array.items.push(value);

    set(key, array);
}

function remove<T extends ConfigObject>(key: string, value: T) {
    const array = getOr<ConfigArray<T>>(key, newArray<T>());
    array.items = array.items.filter(item => item.uuid !== value.uuid);

    set(key, array);
}

function update<T extends ConfigObject>(key: string, value: T) {
    const array = getOr<ConfigArray<T>>(key, newArray<T>());
    const index = array.items.findIndex(item => item.uuid === value.uuid);
    if (index === -1) return;

    array.items[index] = value;

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

export interface Template extends ConfigObject {
    info: TemplateInfo;
    type: "base64" | "url";
    data: string;
}

export function getTemplates() {
    return getArray<Template>("templates");
}

export async function importTemplateFromArrayBuffer(arrayBuffer: ArrayBuffer) {
    const unzipped = await Utils.readZip(arrayBuffer);
    const templateJson = unzipped.file("template.json");
    if (!templateJson) return false;

    const infoString = await templateJson.async("string");
    const info: TemplateInfo = JSON.parse(infoString);
    
    const value: Template = {
        uuid: uuid(),
        info: info,
        type: "base64",
        data: Buffer.from(arrayBuffer).toString("base64"),
    };
    
    add("templates", value);

    return true;
}

//
// PROJECTS
//

export interface ProjectInfo {
    name: string;
    description: string;
    autoSave: boolean;
    date: number;
}

export interface Project extends ConfigObject {
    info: ProjectInfo;
    template: Template;
    data: string;
}

export function getProjects() {
    return getArray<Project>("projects");
}

export function createProject(name: string, description: string, autoSave: boolean, template: Template) {
    const value: Project = {
        uuid: uuid(),
        info: {
            name: name,
            description: description,
            autoSave: autoSave,
            date: Date.now(),
        },
        template: template,
        data: "",
    };

    if (autoSave) {
        add("projects", value);
    }

    return value;
}
