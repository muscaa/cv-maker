"use client";

import { useState, useEffect } from "react";
import impl from "@/api/CVMakerImpl";
import CVMakerSection from "./sections/CVMakerSection";

import Button from "./components/Button";
import * as Utils from "./Utils";

export default function Home() {
    const [pdfUrl, setPDFUrl] = useState<string | null>(null);
    
    useEffect(() => {
        window.cvmaker = impl.main;
    }, []);

    impl.main.__setPDFUrl = setPDFUrl;

    return (
        <div className="p-10 grid grid-cols-2 gap-10 w-screen h-screen">
            <div>
                <Button text="Load Template Zip" onAction={async () => {
                    const file = await Utils.loadFile(".zip");
                    const unzipped = await Utils.readZip(file);
                    const template = await unzipped.file("template.js")?.async("string");
                    const script = await Utils.addScript({ text: template });

                    console.log(script);
                }} />
                <div className="grid max-h-full overflow-auto">
                    <CVMakerSection />
                </div>
            </div>

            <div className="grid">
                {pdfUrl && (
                    <iframe src={pdfUrl} className="w-full h-full" />
                ) || (
                    <div className="bg-black"></div>
                )}
            </div>
        </div>
    );
}
