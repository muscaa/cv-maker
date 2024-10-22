"use client";

import Main from "@/components/Main";
import Menu from "@/components/Menu";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import CheckBoxButton from "@/components/CheckBoxButton";
import Dropdown from "@/components/Dropdown";

export default function NewProject() {
    return (
        <Main>
            <Menu title="New Project">
                <InputField placeholder="Project Name" />
                <InputField placeholder="Tags (sepparated by comma)" />
                <Dropdown options={["1", "2", "3", "4", "5"]} selected={0} />
                <div className="flex">
                    <div className="flex items-center flex-1 gap-2">
                        <CheckBoxButton />
                        <p>Auto save in browser storage</p>
                    </div>
                    <Button text="Create" className="flex-1" />
                </div>
            </Menu>
        </Main>
    );
}
