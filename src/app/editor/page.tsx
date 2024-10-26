"use client";

import * as CVMaker from "@/impl/CVMaker";

import Main from "@/components/Main";
import Menu from "@/components/Menu";

import { useState } from "react";

export default function Editor() {
    const [components, setComponents] = useState<React.ReactNode>([]);
    CVMaker.main.__setComponents = setComponents;

    return (
        <Main>
            <Menu title="Editor">
                {components}
            </Menu>
        </Main>
    );
}
