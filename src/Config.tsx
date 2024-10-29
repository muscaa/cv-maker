import * as Utils from "./Utils";
import * as UUID from "uuid";

type UUID = string;
type ConfigKey = string;

interface ConfigValue {}

interface ConfigObject extends ConfigValue {
    uuid: UUID;
}

interface ConfigArray<T extends ConfigObject> extends ConfigValue {
    items: T[];
}

function newArray<T extends ConfigObject>(): ConfigArray<T> {
    return {
        items: [],
    };
}

function get<T extends ConfigValue>(key: ConfigKey) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
}

function getOr<T extends ConfigValue>(key: ConfigKey, defaultValue: T) {
    return get<T>(key) ?? defaultValue;
}

function getArray<T extends ConfigObject>(key: ConfigKey) {
    return getOr<ConfigArray<T>>(key, newArray<T>()).items;
}

function set<T extends ConfigValue>(key: ConfigKey, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
}

function add<T extends ConfigObject>(key: ConfigKey, value: T) {
    const array = getOr<ConfigArray<T>>(key, newArray<T>());
    array.items.push(value);

    set(key, array);
}

function remove<T extends ConfigObject>(key: ConfigKey, value: T) {
    const array = getOr<ConfigArray<T>>(key, newArray<T>());
    array.items = array.items.filter(item => item.uuid !== value.uuid);

    set(key, array);
}

function update<T extends ConfigObject>(key: ConfigKey, value: T) {
    const array = getOr<ConfigArray<T>>(key, newArray<T>());
    const index = array.items.findIndex(item => item.uuid === value.uuid);
    if (index === -1) return;

    array.items[index] = value;

    set(key, array);
}

//
// CONSTANTS
//

const KEY_TEMPLATES: ConfigKey = "templates";
const NAMESPACE_TEMPLATES: UUID = "10b5a181-04c3-4f40-9b8f-b30345f3c255";

const KEY_PROJECTS: ConfigKey = "projects";

//
// TEMPLATES
//

export interface TemplateInfo {
    repo: string;
    author: string;
    name: string;
    version: string;
    description: string;
    tags: string[];
}

export enum TemplateType {
    Base64,
    URL,
}

export interface Template extends ConfigObject {
    info: TemplateInfo;
    type: TemplateType;
    data: string;
}

export function getTemplates() {
    return getArray<Template>(KEY_TEMPLATES);
}

export async function importTemplateFromArrayBuffer(arrayBuffer: ArrayBuffer) {
    const unzipped = await Utils.readZip(arrayBuffer);
    const templateJson = unzipped.file("template.json");
    if (!templateJson) return false;

    const infoString = await templateJson.async("string");
    const info: TemplateInfo = JSON.parse(infoString);
    
    const value: Template = {
        uuid: UUID.v5(info.author + "@" + info.repo, NAMESPACE_TEMPLATES),
        info: info,
        type: TemplateType.Base64,
        data: Buffer.from(arrayBuffer).toString("base64"),
    };
    
    add(KEY_TEMPLATES, value);

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
    template: UUID;
    data: string;
}

export function getProjects() {
    return getArray<Project>(KEY_PROJECTS);
}

export function createProject(name: string, description: string, autoSave: boolean, template: Template) {
    const value: Project = {
        uuid: UUID.v7(),
        info: {
            name: name,
            description: description,
            autoSave: autoSave,
            date: Date.now(),
        },
        template: template.uuid,
        data: "",
    };

    if (autoSave) {
        add(KEY_PROJECTS, value);
    }

    return value;
}
