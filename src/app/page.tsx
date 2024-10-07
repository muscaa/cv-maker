"use client";

import React from "react";
import { useState, useEffect } from "react";
import Button from "./components/Button";

declare global {
    interface Window {
        setPDFUrl: (url: string) => void;
        addScript: (options: { src?: string, text?: string }) => Promise<HTMLScriptElement>;
    }
}

export default function Home() {
    const [pdfUrl, setPDFUrl] = useState<string | null>(null);
    
    useEffect(() => {
        window.setPDFUrl = setPDFUrl;
        window.addScript = addScript;
    }, []);

    const generatePDF = () => {
    };

    return (
        <div className="p-5 flex gap-2 w-screen h-screen">
            <div className="w-full h-full flex flex-col gap-2">
                <Button text="Generate Preview" onClick={generatePDF} />
                <Button text="Load File" onClick={async () => {
                    const file = await loadFile();

                    const ceva = await addScript({ text: file });

                    console.log(ceva);
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

async function addScript(options: { src?: string, text?: string }) {
    return new Promise<HTMLScriptElement>((resolve, reject) => {
        const script = document.createElement("script");
        if (options.src) script.src = options.src;
        if (options.text) script.text = options.text;

        script.onload = () => {
            resolve(script);
        };
        script.onerror = (error) => {
            document.body.removeChild(script);

            reject(error);
        };

        document.body.appendChild(script);
    });
}

async function loadFile() {
    return new Promise<string>((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            if (!target.files) return;
    
            const file = target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (readerEvent) => {
                const target = readerEvent.target as FileReader;
                
                if (target.result) {
                    resolve(target.result as string);
                } else {
                    reject("Error reading file");
                }
            }
        }
        input.click();
    });
}
