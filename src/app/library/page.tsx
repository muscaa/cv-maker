"use client";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Projects from "./Projects";
import Templates from "./Templates";

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
