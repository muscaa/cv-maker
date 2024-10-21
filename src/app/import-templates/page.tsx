"use client";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";

import { useState } from "react";

import Trusted from "./Trusted";
import GitHub from "./GitHub";
import Local from "./Local";

export default function ImportTemplates() {
    const tabs: {
        [key: string]: React.ReactNode;
    } = {
        "Trusted": <Trusted />,
        "GitHub": <GitHub />,
        "Local": <Local />,
    };

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Main>
            <Menu title="Import Templates">
                <Tabs options={Object.keys(tabs)} selected={tabIndex} onAction={(_, index) => setTabIndex(index)} />
                <br />
                {tabs[Object.keys(tabs)[tabIndex]]}
            </Menu>
        </Main>
    );
}
