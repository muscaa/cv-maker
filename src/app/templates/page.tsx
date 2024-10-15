"use client";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Button from "../components/Button";
import PanelDropdown from "../components/PanelDropdown";

import { useRouter } from "next/navigation";

function TitleBar() {
    return (
        <div className="flex flex-1 justify-end">
            <div>
                <Button text="Import" />
            </div>
        </div>
    );
}

export default function Templates() {
    const router = useRouter();

    return (
        <Main>
            <Menu title="Templates" titleBar={<TitleBar />}>
                <PanelDropdown title="Installed" open>
                    <div className="flex flex-col gap-2 p-2">
                        <Button text="Search" />
                        <Button text="Add" />
                    </div>
                </PanelDropdown>
            </Menu>
        </Main>
    );
}
