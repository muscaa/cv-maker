"use client";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Projects from "./Projects";
import Templates from "./Templates";

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
        </div>
    );
}

export default function Library() {
    return (
        <Main>
            <Menu title="Library" titleBar={<TitleBar />}>
                <Projects />
                <br />
                <Templates />
            </Menu>
        </Main>
    );
}
