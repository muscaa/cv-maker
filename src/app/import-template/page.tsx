"use client";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Tab from "../components/Tab";
import Divider from "../components/Divider";

import { useState } from "react";

import Local from "./Local";
import GitHub from "./GitHub";

interface Tabs {
    [key: string]: () => React.ReactNode;
}

export default function ImportTemplate() {
    const tabs0: Tabs = {
        "Local": () => <Local />,
        "GitHub": () => <GitHub />
    };

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Main>
            <Menu title="Import Template">
                <Tab options={Object.keys(tabs0)} selected={tabIndex} onAction={(option, index) => setTabIndex(index)} />
                <Divider />
                <br />
                {tabs0[Object.keys(tabs0)[tabIndex]]()}
            </Menu>
        </Main>
    );
}
