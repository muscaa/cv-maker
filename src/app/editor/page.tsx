"use client";

import * as CVMaker from "@/impl/CVMaker";

import Main from "@/components/Main";
import Menu from "@/components/Menu";

import { useState } from "react";
import { useProjectStore } from "@/Store";

export default function Editor() {
    const [components, setComponents] = useState<React.ReactNode>([]);
    CVMaker.main.__setComponents = setComponents;

    const { project } = useProjectStore();

    return (
        <Main>
            <Menu title="Editor">
                {components}

                <p>{project?.info.name}</p>
            </Menu>
        </Main>
    );
}
