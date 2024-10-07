"use client";

import React from "react";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import { CVMakerImpl } from "@/api/CVMakerImpl";
import * as Utils from "./Utils";

export default function Home() {
    const [pdfUrl, setPDFUrl] = useState<string | null>(null);
    
    useEffect(() => {
        window.cvmaker = new CVMakerImpl(
            setPDFUrl
        );
    }, []);

    return (
        <div className="p-5 flex gap-2 w-screen h-screen">
            <div className="w-full h-full flex flex-col gap-2">
                <Button text="Generate Preview" />
                <Button text="Load File" onClick={async () => {
                    const file = await Utils.loadFile(".zip");
                    const unzipped = await Utils.readZip(file);
                    const template = await unzipped.file("template.js")?.async("string");
                    const script = await Utils.addScript({ text: template });

                    console.log(script);
                }} />
            </div>

            <div className="w-full h-full">
                {pdfUrl && (
                    <iframe src={pdfUrl} className="w-full h-full" />
                )}
            </div>
        </div>
    );
}
