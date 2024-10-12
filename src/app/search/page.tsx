"use client";

import * as api from "@/api/CVMaker";

import { useState, useEffect } from "react";

import Button from "../components/Button";
import Text from "../components/Text";

import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
    const [value, setValue] = useState<api.CVMaker | null>(null);

    useEffect(() => {
        setValue(window.cvmaker);
    }, []);

    const router = useRouter();
    const searchParams = useSearchParams();

    return (
        <div className="p-10 grid grid-cols-2 gap-10 w-screen h-screen">
            <div>
                <Button text="Button 1" onAction={() => {
                    router.push("/");
                }} />
            </div>

            <div>
                <Text text={"cvmaker: " + String(value)} />
                <Text text={"test: " + searchParams.get("test")} />
            </div>
        </div>
    );
}
