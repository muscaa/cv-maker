"use client";

import * as SVG from "../SVG";

import { useRouter } from "next/navigation";

import Main from "../components/Main";
import Divider from "../components/Divider";
import IconButton from "../components/IconButton";

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

export default function Library() {
    const router = useRouter();

    const projects = [];

    for (let i = 1; i <= 20; i++) {
        projects.push({
            name: "Project " + i,
            date: "2021-10-01",
            tags: [ "tag1", "tag2", "tag3" ],
        });
    }

    return (
        <Main>
            <div
                className="
                    flex flex-col size-full
                    bg-background-2 bg-opacity-25
                    shadow-md shadow-shadow
                    p-5 rounded-xl gap-2
                "
            >
                <div className="flex">
                    <div className="flex items-center gap-2">
                        <IconButton icon={SVG.ArrowBack} className="size-12 text-text-2" onAction={router.back} />
                        <Divider className="h-full" />
                        <h2><span className="text-secondary font-bold">CV</span> Maker / Library</h2>
                    </div>
                </div>
                <Divider />
                <div className="flex flex-col max-h-full overflow-auto gap-2 p-2">
                    {projects.map((project, index) => (
                        <LibraryEntry key={index} name={project.name} date={project.date} tags={project.tags} />
                    ))}
                </div>
            </div>
        </Main>
    );
}
