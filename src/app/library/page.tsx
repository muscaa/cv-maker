"use client";

import * as Config from "../Config";

import Main from "../components/Main";
import Divider from "../components/Divider";
import Menu from "../components/Menu";
import InputField from "../components/InputField";
import PanelDropdown from "../components/PanelDropdown";

import { useState, useEffect } from "react";

/*
    <div className="flex flex-wrap gap-1">
        {props.tags.map((tag, index) => (
            <span
                key={index}
                className="
                    text-secondary font-normal
                    bg-secondary bg-opacity-10
                    px-2 py-0.5 rounded-full h6
                    flex-grow text-center
                "
            >
                {tag}
            </span>
        ))}
    </div>
*/

function TitleBar() {
    return (
        <div className="flex flex-1 size-full items-center justify-end">
            <div>
                <InputField placeholder="Search..." />
            </div>
        </div>
    );
}

interface LibraryEntryProps {
    name: string;
    date: string;
}

function LibraryEntry(props: LibraryEntryProps) {
    return (
        <button
            className="
                appearance-none outline-none
                flex items-center gap-2
                bg-background-4 bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-25
                shadow-md shadow-shadow
                p-3 rounded-xl
                transition-colors duration-200 ease-in-out
            "
        >
            <div className="flex flex-1">
                <h3>{props.name}</h3>
            </div>
            <Divider className="h-8" />
            <p>{props.date}</p>
        </button>
    );
}

export default function Library() {
    const [projects, setProjects] = useState<Config.Project[] | null>(null);

    useEffect(() => {
        setProjects(Config.getProjects());
    }, []);

    return (
        <Main>
            <Menu title="Library" titleBar={<TitleBar />}>
                <PanelDropdown title="Browser Storage" open>
                    <div className="flex flex-col gap-2 p-2">
                        {projects === null && (
                            <p>Loading...</p>
                        ) || projects!.length === 0 && (
                            <p>Nothing here</p>
                        ) || projects!.map((project, index) => (
                            <LibraryEntry key={index} name={project.name} date={project.date} />
                        ))}
                    </div>
                </PanelDropdown>
            </Menu>
        </Main>
    );
}
