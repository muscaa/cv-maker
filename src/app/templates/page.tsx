"use client";

import Main from "../components/Main";
import Menu from "../components/Menu";
import Button from "../components/Button";

import { useRouter } from "next/navigation";

export default function Templates() {
    const router = useRouter();

    return (
        <Main>
            <Menu title="Templates">
                <Button text="Search" onAction={() => router.push("/templates/search")} />
            </Menu>
        </Main>
    );
}
