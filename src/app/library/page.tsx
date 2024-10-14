"use client";

import Main from "../components/Main";
import Divider from "../components/Divider";
import Menu from "../components/Menu";
import InputField from "../components/InputField";

interface LibraryEntryProps {
    name: string;
    date: string;
    tags: string[];
}

function LibraryEntry(props: LibraryEntryProps) {
    return (
        <div className="
                grid grid-cols-[1fr_150px_1fr]
                bg-background-3 bg-opacity-25
                shadow-md shadow-shadow
                p-3 rounded-xl
            "
        >
            <div className="flex flex-col gap-2">
                <p>{props.name}</p>
                <p>{props.tags}</p>
            </div>
            <div className="flex gap-4">
                <Divider />
                <p>{props.date}</p>
            </div>
            <div className="flex gap-4">
                <Divider />
            </div>
        </div>
    );
}

function TitleBar() {
    return (
        <div className="flex flex-1 size-full items-center justify-end">
            <div>
                <InputField placeholder="Search..." />
            </div>
        </div>
    );
}

export default function Library() {
    const projects = [];

    for (let i = 1; i <= 20; i++) {
        projects.push({
            name: "Project " + i,
            date: "2021-10-01",
            tags: ["tag1", "tag2", "tag3"],
        });
    }

    return (
        <Main>
            <Menu backPage="/" title="Library" titleBar={<TitleBar />}>
                {projects.map((project, index) => (
                    <LibraryEntry key={index} name={project.name} date={project.date} tags={project.tags} />
                ))}
            </Menu>
        </Main>
    );
}
